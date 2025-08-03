import { useState } from 'react';
import { Copy } from 'lucide-react'; // icon library (optional)

const CodeBlock = ({ example }: any) => {

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(example);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (

    <div className="relative bg-white-800 text-black text-regular rounded-xl p-10 my-2 ">
      {Array.isArray(example) && example.map((line: any, i: any) => (
        <pre key={i} className="overflow-x-auto">
          <code className="text-white text-lg whitespace-pre-wrap ">{line}</code>
        </pre>
      ))}


      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 bg-gray-700 hover:bg-gray-600 rounded-md transition"
      >
        <Copy size={18} className="text-white" />
      </button>

      {copySuccess && (
        <div className="absolute top-3 right-14 bg-green-600 text-sm text-white px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>

  );
};

export default CodeBlock;
