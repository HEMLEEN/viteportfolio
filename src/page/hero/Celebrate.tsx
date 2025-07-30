import { useState } from "react";

const Celebrate = () => {

    const [showFull, setShowFull] = useState(false);
    const titleDesc = `Life is filled with moments worth celebrating—and we love sharing those moments with you! From joyful worship services and holiday gatherings to baptisms, weddings, and community milestones, our church is a place where celebration brings us closer to God and one another. Come join us as we lift our voices, honor life’s blessings, and create memories rooted in faith, hope, and joy. There’s always a reason to celebrate—together.`
  
    const words = titleDesc.split(" ");
    const isLong = words.length > 20;
    const displayedText = showFull
      ? titleDesc
      : words.slice(0, 20).join(" ") + (isLong ? "..." : "");
      
  return (
      <div className="mt-16 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest">Our Mission & Vision</p>
        <h3 className="text-xl md:text-2xl font-bold mt-2 mb-2 uppercase">Share the joy with us</h3>
        <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base mb-4">{displayedText}</p>
         <button className="bg-orange-200 text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-300 transition duration-300 mb-12" onClick={() => setShowFull(!showFull)}>
        {!showFull ? 'Read More' : 'View Less'}
      </button>

      </div>
  )
}

export default Celebrate
