import { useContext } from 'react'
import { GlobalContextData } from '../../../context/Create'
import { NavLink } from 'react-router-dom';
import CodingIllustration from '../components/CodingIllustration';

const VersionContents = () => {

    const { coreTools } = useContext(GlobalContextData);

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="mt-8">
                <div className="mb-6 flex justify-between items-center gap-8 text-2xl font-semibold uppercase ">
                    <p> {coreTools.topic}</p>
                    <p className='hover:underline' ><NavLink to={'/versionTools'}>Back</NavLink></p>
                </div>
                 <div className="mb-6 flex justify-between items-center gap-8 text-lg ">
                    <p> {coreTools.topicDesc}</p>
                </div>
                <div className="flex flex-col space-y-6 ">
                    {coreTools.topicAnswer.map((line: any, idx: any) => (
                        <div key={idx} className="mb-4">
                         
                            <h3></h3>
                            <div>
                                <p className="font-bold mx-auto text-gray-900 mb-6 uppercase"> {line.title}</p>
                            </div>
                            <div>
                                <p className="mx-auto text-gray-600 mb-6 notranslate">{line.description}</p>
                            </div>
                            {Array.isArray(line.code) &&
                                line.code.map((code: any, index: any) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="block md:flex flex-col ">
                                            <CodingIllustration code={code.title} example={code.example} />
                                        </div>

                                    </div>
                                ))}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default VersionContents
