import { Copy } from "lucide-react";
import React, { useState } from "react";
import CodeBlock from "../core/components/CodeBlock";

const CodeEditorDemo = ({ generatedCode }: any) => {
    const [output, setOutput] = useState<string>("");
    const [copySuccess, setCopySuccess] = useState(false);

    const runCode = () => {
        try {
            const result = generatedCode.run();
            console.log('result', result)
            setOutput(`Output: ${JSON.stringify(result)}`);
        } catch (err) {
            setOutput(`Error: ${err}`);
        }
    };

    const resetCode = () => {
        setOutput("");
    };


    const handleCopy = () => {
        navigator.clipboard.writeText(generatedCode.code.join("\n"));
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };


    return (
        <div className="bg-[#1e1e1e] text-white w-full max-w-4xl rounded-md shadow-lg overflow-hidden border border-gray-700">
            {/* Header */}
            <div className="bg-[#333] px-4 py-2 text-sm font-mono border-b border-gray-700 flex justify-between items-center">
                {generatedCode.title}
               
                {/* <select
          className="bg-[#1e1e1e] text-white text-sm border border-gray-600 rounded px-2 py-1"
          value={selectedSnippet}
          onChange={(e) => setSelectedSnippet(Number(e.target.value))}
        >
          {codeSnippets.map((snippet:any, idx:any) => (
            <option key={idx} value={idx}>
              {snippet.title}
            </option>
          ))}
        </select> */}
            </div>

            {/* Code + Buttons Layout */}
            <div className="flex">
                {/* Buttons */}


                {/* Code Block */}
                <pre className="flex-1 p-4 font-mono text-sm leading-6 bg-[#1e1e1e] text-green-200 overflow-auto">
                  <CodeBlock example={generatedCode.code} />
                   
                </pre>
            </div>
            <div className="flex flex-col space-y-2 p-2 bg-[#2d2d2d] border-r border-gray-700">
                <button
                    onClick={runCode}
                    className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-sm"
                >
                    Run
                </button>
                <button
                    onClick={resetCode}
                    className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-sm"
                >
                    Reset
                </button>
            </div>

            {/* Output */}
            <div className="bg-[#1e1e1e] px-4 py-3 border-t border-gray-700 font-mono text-sm text-white">
                {output && `> ${output}`}
            </div>
        </div>
    );
};

export default CodeEditorDemo;
