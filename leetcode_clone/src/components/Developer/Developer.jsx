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
  const [selectedTopic, setSelectedTopic] = useState('Linked List');
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleRun = () => {
    if (language === 'cpp') {
      setOutput('Finished in 12 ms\nHello from C++');
    } else if (language === 'java') {
      setOutput('Finished in 20 ms\nHello from Java');
    } else if (language === 'python') {
      setOutput('Finished in 8 ms\nHello from Python');
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col items-center">

      {/* 👤 Icon */}
      <div className="mb-3">
        <div className="bg-teal-500 p-1 rounded-full shadow-md">
          <FaUserCircle size={50} className="text-gray-500" />
        </div>
      </div>

      {/* Developer Text */}
      <div className="mb-3">
        <span className='text-teal-500 text-xl font-semibold text-center'>Developer</span>
      </div>

      {/* Heading + Paragraph Text */}
      <div className='text-gray-500 mb-3'>  {/* Gap equal to icon and Developer text */}

        <p className='text-sm mb-2'>
          We now support 14 popular coding languages. At our core, LeetCode is about
        </p>

        <p className='text-sm mb-2'>
          developers. Our powerful development tools such as Playground help you test,
        </p>

        <p className='text-sm mb-2 text-center'>
          debug and even write your own projects online.
        </p>

      </div>

      {/* Cards Section */}
      <div className="flex items-start justify-center gap-6 w-full max-w-[1100px]">

        {/* Left Developer Card */}
        <div
          className="flex flex-col bg-white rounded-xl shadow overflow-hidden"
          style={{ width: '500px', height: '350px' }}
        >

          {/* Tabs */}
          <div className="flex bg-gray-100 border-b px-2 text-xs">
            {languageOptions.map((opt) => (
              <button
                key={opt.id}
                className={`px-2 py-1 font-medium border-b-2 transition ${
                  language === opt.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
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

          {/* Toolbar */}
          <div className="flex items-center gap-2 px-2 py-1 border-b bg-white text-xs">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 rounded border hover:bg-gray-100"
            >
              <FiCopy /> Copy
            </button>
            <button
              onClick={handleRun}
              className="flex items-center gap-1 px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700"
            >
              <BsPlayFill /> Run
            </button>
            <button
              className="flex items-center gap-1 px-2 py-1 rounded bg-black text-white hover:bg-gray-900"
            >
              <VscPreview /> Playground
            </button>
          </div>

          {/* Editor + Output */}
          <div className="flex flex-1">
            <div className="w-1/2 h-full">
              <Editor
                theme="vs-dark"
                language={language}
                value={code}
                onChange={(val) => setCode(val)}
                onMount={handleEditorDidMount}
                options={{
                  fontSize: 12,
                  minimap: { enabled: false },
                  automaticLayout: true,
                }}
                height="100%"
              />
            </div>
            <div className="w-1/2 h-full bg-gray-50 p-2 overflow-auto text-xs text-gray-700 whitespace-pre-wrap">
              {output || 'Output will appear here after running the code.'}
            </div>
          </div>
        </div>

        {/* Right Sidebar Card */}
        <aside style={{ width: '150px', height: '250px' }}>
          <div className="bg-white rounded-xl shadow p-3 h-full">
            <h2 className="font-semibold text-xs mb-2">Topics</h2>
            <ul className="space-y-1 text-xs">
              {['Linked List', 'Binary Tree', 'Fibonacci'].map((topic) => (
                <li
                  key={topic}
                  className={`cursor-pointer px-2 py-1 rounded hover:bg-blue-50 ${
                    selectedTopic === topic ? 'text-blue-700 font-semibold' : 'text-gray-700'
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
                className="mt-3 text-[10px] text-gray-600"
              >
                <strong>{selectedTopic}</strong> details shown here.
              </motion.div>
            </AnimatePresence>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default Developer;
