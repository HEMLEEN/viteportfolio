import React, { useEffect, useState } from "react";
import CodeEditorDemo from "./CodeEditorDemo";
import Editor from "@monaco-editor/react";

const codeSnippets = [
  {
    title: "map",
    code: [
      "const numbers = [1, 2, 3, 4, 5];",
      "const doubled = numbers.map(num => num * 2);",
      "console.log(doubled); // [2, 4, 6, 8, 10]"
    ],
    run: () => {
      const numbers = [1, 2, 3, 4, 5];
      return numbers.map(num => num * 2);
    }
  },
  {
    title: "filter",
    code: [
      `const words = ["spray", "elite", "exuberant", "destruction", "present"];`,
      "const result = words.filter((word) => word.length > 6);",
      "console.log(result); // ['exuberant', 'destruction', 'present']"
    ],
    run: () => {
      const words = ["spray", "elite", "exuberant", "destruction", "present"];
      return words.filter((word) => word.length > 6);
    }
  },
  {
    title: "reduce",
    code: [
      "const numbers = [1, 2, 3, 4, 5];",
      "const sum = numbers.reduce((total, num) => total + num, 0);",
      "console.log(sum); // 15"
    ],
    run: () => {
      const numbers = [1, 2, 3, 4, 5];
      return numbers.reduce((total, num) => total + num, 0);
    }
  },
  {
    title: "find",
    code: [
      "const numbers = [5, 12, 8, 130, 44];",
      "const found = numbers.find(num => num > 10);",
      "console.log(found); // 12"
    ],
    run: () => {
      const numbers = [5, 12, 8, 130, 44];
      return numbers.find(num => num > 10);
    }
  },
  {
    title: "forEach",
    code: [
      "const numbers = [1, 2, 3];",
      "numbers.forEach(num => console.log(num * 2));",
      "// Output: 2, 4, 6"
    ],
    run: () => {
      const numbers = [1, 2, 3];
      let result: number[] = [];
      numbers.forEach(num => result.push(num * 2));
      return result;
    }
  },
  {
    title: "some",
    code: [
      "const numbers = [1, 2, 3, 4, 5];",
      "const hasEven = numbers.some(num => num % 2 === 0);",
      "console.log(hasEven); // true"
    ],
    run: () => {
      const numbers = [1, 2, 3, 4, 5];
      return numbers.some(num => num % 2 === 0);
    }
  },
  {
    title: "every",
    code: [
      "const numbers = [2, 4, 6, 8];",
      "const allEven = numbers.every(num => num % 2 === 0);",
      "console.log(allEven); // true"
    ],
    run: () => {
      const numbers = [2, 4, 6, 8];
      return numbers.every(num => num % 2 === 0);
    }
  },
  {
    title: "includes",
    code: [
      "const numbers = [1, 2, 3];",
      "console.log(numbers.includes(2)); // true",
      "console.log(numbers.includes(4)); // false"
    ],
    run: () => {
      const numbers = [1, 2, 3];
      return {
        includes2: numbers.includes(2),
        includes4: numbers.includes(4)
      };
    }
  },
  {
    title: "sort",
    code: [
      "const numbers = [4, 2, 5, 1, 3];",
      "numbers.sort((a, b) => a - b);",
      "console.log(numbers); // [1, 2, 3, 4, 5]"
    ],
    run: () => {
      const numbers = [4, 2, 5, 1, 3];
      return numbers.sort((a, b) => a - b);
    }
  },
  {
    title: "concat",
    code: [
      "const array1 = [1, 2, 3];",
      "const array2 = [4, 5, 6];",
      "const combined = array1.concat(array2);",
      "console.log(combined); // [1, 2, 3, 4, 5, 6]"
    ],
    run: () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      return array1.concat(array2);
    }
  }
];

// const AiTool: React.FC = () => {

//     const [selected, setSelected] = useState(0);
//     const [generatedCode, setGeneratedCode] = useState<any>({
//         title: "",
//         code: "",
//         run: () => { }
//     });
//     const [customCode, setCustomCode] = useState<string>(""); // Editable code
//     const [output, setOutput] = useState<string>(""); // Run output

//     const handleGenerate = (snippet: any, id: any) => {
//         setSelected(id);
//         const codeText = snippet.code.join("\n");
//         setGeneratedCode({ title: `Example usage of ${snippet.title}`, code: codeText, run: snippet.run });
//         setCustomCode(codeText); // Load into editor
//     };

//     const handleRunCode = () => {
//         try {
//             // eslint-disable-next-line no-new-func
//             console.log('customCode', customCode)
//             const result = new Function(customCode)();
//             setOutput(String(result ));
//         } catch (err: any) {
//             setOutput(`Error: ${err.message}`);
//         }
//     };

//     return (
//         <section className="bg-gray-900 py-16 px-6 md:px-20 mt-10">
//             <div className="flex h-screen bg-gray-50">
//                 {/* Left Side: Code Snippet List */}
//                 <div className="w-1/3 p-6 bg-white border-r overflow-auto">
//                     <h2 className="text-xl font-bold mb-4">Code Snippets</h2>
//                     <ul>
//                         {codeSnippets.map((snippet, id) => (
//                             <li
//                                 key={snippet.title}
//                                 className={`cursor-pointer p-3 rounded mb-2 ${
//                                     selected === id
//                                         ? "bg-blue-100 font-semibold"
//                                         : "hover:bg-gray-100"
//                                 }`}
//                                 onClick={() => handleGenerate(snippet, id)}
//                             >
//                                 {snippet.title}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Right Side: Code Editor */}
//                 <div className="w-2/3 flex flex-col p-6">
//                     <h2 className="text-xl font-bold mb-4">{generatedCode.title || "Select your Snippet"}</h2>
//                     {/* Monaco Editor */}
//                     <div className="flex-1 border rounded overflow-hidden">
//                         <Editor
//                             height="100%"
//                             defaultValue={generatedCode.code}
//                             language="javascript"
//                             value={customCode}
//                             onChange={(value:any) => setCustomCode(value || "")}
//                             theme="vs-dark"
//                         />
//                     </div>

//                     {/* Run Button */}
//                     <button
//                         onClick={handleRunCode}
//                         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//                     >
//                         Run Code
//                     </button>

//                     {/* Output Area */}
//                     <div className="mt-4 bg-black text-green-400 p-4 rounded h-32 overflow-auto">
//                         {output || "Output will appear here..."}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AiTool;

const AiTool = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleGenerate = (snippet: any, id: number) => {
    setSelected(id);
    setGeneratedCode(snippet.code.join("\n")); // join array into editable text
    setOutput(""); // clear old output
  };

  const runCode = () => {
    try {
      console.log('generatedCode', generatedCode)
      const result = new Function(generatedCode)(); // run custom code
      console.log('result', result)

      setOutput(String(result)); // store result in output
    } catch (err: any) {
      setOutput(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-6 md:px-20 mt-10">
      <div className="flex h-screen bg-gray-50">
        {/* Left Side: Snippets */}
        <div className="w-1/3 p-6 bg-white border-r">
          <h2 className="text-xl font-bold mb-4">Code Snippets</h2>
          <ul>
            {codeSnippets.map((snippet: any, id: any) => (
              <li
                key={snippet.title}
                className={`cursor-pointer p-3 rounded mb-2 ${selected === id ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
                  }`}
                onClick={() => handleGenerate(snippet, id)}
              >
                {snippet.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Editor + Output */}
        <div className="w-2/3 p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Code Editor</h2>
          <textarea
            value={generatedCode}
            onChange={(e) => setGeneratedCode(e.target.value)}
            className="flex-1 bg-gray-900 text-green-200 p-4 rounded font-mono text-sm"
            style={{ minHeight: "300px" }}
          />
          <button
            onClick={runCode}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Run
          </button>
          <div className="mt-4 bg-black text-green-400 p-4 rounded">
            <strong>Output:</strong>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTool;