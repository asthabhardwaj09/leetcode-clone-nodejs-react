const axios = require("axios");

const executeCode = async (req, res) => {
  const { code, language_id, input } = req.body;

  // Validate required fields
  if (!code || !language_id) {
    return res.status(400).json({ error: "Code and language_id are required." });
  }

  // Encode source code and input
  const encodedCode = Buffer.from(code).toString("base64");
  const encodedInput = Buffer.from(input || "").toString("base64");

  try {
    const response = await axios.post(
      `${process.env.JUDGE0_API_URL}/submissions?base64_encoded=true&wait=true`,
      {
        source_code: encodedCode,
        language_id,
        stdin: encodedInput,
      },
      {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": process.env.JUDGE0_API_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Execution Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Code execution failed." });
  }
};

module.exports = { executeCode };
