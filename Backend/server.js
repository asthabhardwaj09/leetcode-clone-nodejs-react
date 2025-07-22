const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const languageMap = {
  python: 71,
  cpp: 54,
  java: 62,
  javascript: 63,
  c: 50,
};

app.post("/run", async (req, res) => {
  const { code, language, input } = req.body;

  const language_id = languageMap[language];
  if (!language_id) return res.status(400).json({ error: "Unsupported language." });

  try {
    const submission = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true",
      {
        source_code: Buffer.from(code).toString("base64"),
        stdin: Buffer.from(input || "").toString("base64"),
        language_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "YOUR_RAPID_API_KEY",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      }
    );

    const { stdout, stderr, compile_output, message } = submission.data;

    if (stderr) return res.json({ output: Buffer.from(stderr, "base64").toString() });
    if (compile_output) return res.json({ output: Buffer.from(compile_output, "base64").toString() });
    if (message) return res.json({ output: Buffer.from(message, "base64").toString() });

    return res.json({ output: Buffer.from(stdout || "", "base64").toString() });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Judge0 execution failed." });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
