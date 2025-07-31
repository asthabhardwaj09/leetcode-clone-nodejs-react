import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const Playground = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [showTimerUI, setShowTimerUI] = useState(false);
  const [activeTab, setActiveTab] = useState("stopwatch");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setStopwatchTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timerTime > 0) {
      interval = setInterval(() => {
        setTimerTime((prev) => prev - 1);
      }, 1000);
    } else if (timerTime === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerTime]);

  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async () => {
    setOutput("Running...");
    try {
      const response = await fetch("http://localhost:5000/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language_id: 71,
          input: input,
        }),
      });

      const data = await response.json();
      const result =
        data.stdout || data.stderr || data.compile_output || "No output";
      const decoded = atob(result);
      setOutput(decoded);
      setIsRunning(false);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  const toggleTimerUI = () => {
    setShowTimerUI((prev) => !prev);
  };

  const startTimer = () => {
    const total = parseInt(timerHours) * 3600 + parseInt(timerMinutes) * 60;
    setTimerTime(total);
    setIsTimerRunning(true);
  };

  const handleStopwatchClick = () => {
    setIsRunning((prev) => !prev);
  };

  const handleTimerClick = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimerTime(0);
    setIsTimerRunning(false);
  };

  return (
    <div
      className={`relative ${
        isFullscreen ? "overflow-hidden" : "min-h-screen px-4 py-6"
      } transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {!isFullscreen && (
        <>
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Code Editor</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-1 rounded-md shadow-sm border transition-all duration-300
              ${
                darkMode
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
              <button onClick={toggleTimerUI} className="text-xl">
                🕗
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="text-xl"
                title="Go Fullscreen"
              >
                ⛶
              </button>
            </div>
          </div>
        </>
      )}

      {/* Timer UI */}
      {showTimerUI && (
        <div className="absolute top-20 right-6 w-72 bg-[#1f1f1f] text-white p-4 rounded-xl shadow-xl z-10 space-y-4">
          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab("stopwatch")}
              className={`flex flex-col items-center justify-center w-1/2 py-3 rounded-lg transition-all duration-200 ${
                activeTab === "stopwatch"
                  ? "bg-[#2b2b2b] border border-blue-500 text-white"
                  : "bg-transparent text-gray-400"
              }`}
            >
              <span className="text-2xl text-blue-400">⏰</span>
              <span className="text-sm mt-1">Stopwatch</span>
            </button>

            <button
              onClick={() => setActiveTab("timer")}
              className={`flex flex-col items-center justify-center w-1/2 py-3 rounded-lg transition-all duration-200 ${
                activeTab === "timer"
                  ? "bg-[#2b2b2b] border border-yellow-500 text-white"
                  : "bg-transparent text-gray-400"
              }`}
            >
              <span className="text-2xl text-yellow-400">⏱️</span>
              <span className="text-sm mt-1">Timer</span>
            </button>
          </div>

          {activeTab === "stopwatch" && (
            <div className="text-center space-y-2">
              <div className="flex justify-center items-center gap-2">
                <div
                  onClick={handleStopwatchClick}
                  className="text-2xl font-mono cursor-pointer hover:text-blue-300"
                  title="pause or resume"
                >
                  {formatTime(stopwatchTime)}
                </div>
                <span
                  title="Reset Stopwatch"
                  onClick={resetStopwatch}
                  className="cursor-pointer hover:text-red-400 text-lg"
                >
                  🔄
                </span>
              </div>
              <button
                onClick={() => {
                  setStopwatchTime(0);
                  setIsRunning(true);
                  setShowTimerUI(false);
                }}
                className="w-full bg-white text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <span>▶</span> Start Stopwatch
              </button>
            </div>
          )}

          {activeTab === "timer" && (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  onClick={handleTimerClick}
                  className="text-orange-400 text-3xl cursor-pointer hover:text-orange-300"
                  title="pause or resume"
                >
                  {formatTime(timerTime)}
                </div>
                <span
                  title="Reset Timer"
                  onClick={resetTimer}
                  className="cursor-pointer hover:text-red-400 text-lg"
                >
                  🔄
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={timerHours}
                    onChange={(e) => setTimerHours(e.target.value)}
                    className="w-14 h-12 bg-[#333] text-white text-xl font-semibold text-center rounded-lg border border-gray-500 focus:outline-none"
                    min={0}
                  />
                  <span className="text-sm mt-1 text-gray-300">hr</span>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={timerMinutes}
                    onChange={(e) => setTimerMinutes(e.target.value)}
                    className="w-14 h-12 bg-[#333] text-white text-xl font-semibold text-center rounded-lg border border-gray-500 focus:outline-none"
                    min={0}
                  />
                  <span className="text-sm mt-1 text-gray-300">min</span>
                </div>
              </div>
              <button
                onClick={() => {
                  startTimer();
                  setShowTimerUI(false);
                }}
                className="w-full bg-white text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <span>▶</span> Start Timer
              </button>
            </div>
          )}
        </div>
      )}

      {/* Editor */}
      <div
        className={`${
          isFullscreen
            ? "fixed top-0 left-0 w-screen h-screen z-50"
            : "mb-6 relative"
        }`}
      >
        {isFullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-2 right-4 z-50 px-2 py-1 bg-white text-black rounded shadow text-sm"
            title="Exit Fullscreen"
          >
            ❌ Exit Fullscreen
          </button>
        )}

        <Editor
          height={isFullscreen ? "100%" : "40vh"}
          width="100%"
          defaultLanguage="python"
          defaultValue={code}
          onChange={(value) => setCode(value)}
          theme={darkMode ? "vs-dark" : "light"}
        />
      </div>

      {/* Input + Output Section */}
      {!isFullscreen && (
        <div
          className={`rounded-lg p-6 shadow-md transition-all duration-300 ${
            darkMode ? "bg-[#111]" : "bg-white"
          }`}
        >
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Input:</h4>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows="5"
              placeholder="Enter custom input here"
              className={`w-full p-3 rounded-md border font-mono resize-y outline-none transition
                ${
                  darkMode
                    ? "bg-[#1e1e1e] text-white border-gray-600"
                    : "bg-gray-100 text-black border-gray-300"
                }`}
            />
          </div>

          <div className="mb-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition duration-200"
            >
              Run Code
            </button>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Output:</h4>
            <pre
              className={`whitespace-pre-wrap p-4 rounded-md text-sm font-mono border transition
                ${
                  darkMode
                    ? "bg-[#1e1e1e] text-green-400 border-gray-600"
                    : "bg-gray-100 text-black border-gray-300"
                }`}
            >
              {output}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playground;
