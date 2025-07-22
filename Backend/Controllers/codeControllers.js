const axios = require("axios");

exports.runCode = async (req, res) => {
  const { code, language, input } = req.body;

  const languageMap = {
    cpp: 54,
    python: 71,
    java: 62,
    javascript: 63,
    c: 50,
  };

  const language_id = languageMap[language.toLowerCase()];
  if (!language_id) {
    return res.status(400).json({ error: "Unsupported language" });
  }

  try {
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: language_id,
        stdin: input || "", // ✅ Pass user input from frontend
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      }
    );

    const { stdout, stderr, compile_output } = response.data;
    const output = stdout || compile_output || stderr || "No output received from Judge0";

    res.json({ output });
  } catch (error) {
    console.error("Judge0 error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Code execution failed. Please try again." });
  }
};
