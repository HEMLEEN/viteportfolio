import CodeBlock from "./CodeBlock";

const CodingIllustration = (props: any) => {

    const { code, example } = props;

    return (

        <div className="min-w-full text-left border border-gray-200 rounded-lg">
            <div className="block md:flex flex-col py-4 gap-2 space-y-4">

                {/* Syntax highlighter for the code block */}
                <div className="text-left break-words px-4">
                    {code != '-' &&
                        code
                    }
                </div>

                {/* Compiler steps */}
                {example != '-' &&
                    <div className=" bg-gray-800 min-w-full text-left border border-gray-200 rounded-lg">
                        <CodeBlock example={example} />
                    </div>}
            </div>
        </div>

    );
};

export default CodingIllustration;
