import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { FiCopy } from 'react-icons/fi';
import { BsPlayFill } from 'react-icons/bs';
import { VscPreview } from 'react-icons/vsc';
import { FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const languageOptions = [
  { id: 'cpp', label: 'C++' },
  { id: 'java', label: 'Java' },
  { id: 'python', label: 'Python' },
];

const defaultSnippets = {
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // write code here
    return 0;
}`,
  java: `public class Main {
    public static void main(String[] args) {
        // write code here
    }
}`,
  python: `# write code here
def main():
    pass

if __name__ == "__main__":
    main()
`,
};

function Developer() {
  const [language, setLanguage] = useState('cpp');
  const [code, setCode] = useState(defaultSnippets['cpp']);
  const [output, setOutput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Linked List');
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleRun = async () => {
    setOutput("Running...");
    try {
      const response = await fetch("http://localhost:5000/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          input: userInput,
        }),
      });
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("Error executing code");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex flex-col items-center">
      {/* ✅ Icon + Developer text (Outside the card) */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white rounded-full p-2 shadow-md">
          <FaUserCircle size={50} className="text-gray-800" />
        </div>
        <h1 className="text-xl font-semibold text-teal-600 mt-2">Developer</h1>
      </div>

      {/* ✅ Main Card */}
      <div className="bg-[#1e1e1e] text-white w-full max-w-6xl rounded-xl shadow-lg overflow-hidden flex gap-4 p-4">
        {/* Sidebar */}
        <aside className="w-[180px] bg-[#1e1e1e] p-3 h-[550px] border-r border-[#333]">
          <h2 className="text-sm font-bold mb-2">Topics</h2>
          <ul className="space-y-1 text-sm">
            {['Linked List', 'Binary Tree', 'Fibonacci'].map((topic) => (
              <li
                key={topic}
                className={`cursor-pointer px-2 py-1 rounded hover:bg-[#333] ${
                  selectedTopic === topic ? 'bg-[#333] text-teal-300' : 'text-gray-300'
                }`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </li>
            ))}
          </ul>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-xs text-gray-400"
            >
              <strong>{selectedTopic}</strong> details shown here.
            </motion.div>
          </AnimatePresence>
        </aside>

        {/* Editor Section */}
        <div className="flex-1 flex flex-col">
          {/* Language Tabs */}
          <div className="flex items-center border-b border-[#333] px-4 py-2 text-sm bg-[#1e1e1e]">
            {languageOptions.map((opt) => (
              <button
                key={opt.id}
                className={`px-3 py-1 mr-2 rounded ${
                  language === opt.id
                    ? 'bg-[#007acc] text-white'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => {
                  setLanguage(opt.id);
                  setCode(defaultSnippets[opt.id]);
                  setOutput('');
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 px-4 py-2 border-b border-[#333] text-sm bg-[#1e1e1e]">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1 rounded bg-[#3c3c3c] hover:bg-[#555]"
            >
              <FiCopy /> Copy
            </button>
            <button
              onClick={handleRun}
              className="flex items-center gap-2 px-3 py-1 rounded bg-green-600 hover:bg-green-700"
            >
              <BsPlayFill /> Run
            </button>
            <button
              className="flex items-center gap-2 px-3 py-1 rounded bg-[#007acc] hover:bg-[#005fa3]"
            >
              <VscPreview /> Playground
            </button>
          </div>

          {/* Editor */}
          <Editor
            theme="vs-dark"
            language={language}
            value={code}
            onChange={(val) => setCode(val)}
            onMount={handleEditorDidMount}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              automaticLayout: true,
            }}
            height="250px"
          />

          {/* User Input */}
          <div className="bg-[#1e1e1e] px-4 py-2 text-sm border-t border-[#333]">
            <label className="block text-gray-400 mb-1">Input:</label>
            <textarea
              rows="3"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full bg-[#2d2d2d] border border-[#444] text-white rounded px-2 py-1 resize-none"
              placeholder="Enter custom input here..."
            />
          </div>

          {/* Output */}
          <div className="bg-black text-green-400 font-mono px-4 py-2 h-[120px] overflow-auto text-xs border-t border-[#333]">
            {output || 'Output will appear here after running the code.'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
