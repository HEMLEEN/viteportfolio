
import { useState } from 'react';
// import { LoveImageOne, LoveImageThree, LoveImageTwo } from '../../constants/ImageSource';
import { t } from 'i18next';
import Celebrate from './Celebrate';

const LoveCompassionSection = () => {

  const [showFull, setShowFull] = useState(false);
  const titleDesc = ` At the core of our ${t('customWords.church')} is a deep commitment to love and compassion. We believe in reflecting the heart of Christ by caring for one another and reaching out to those in need. Whether it’s through a kind word, a helping hand, or standing with someone during life’s challenges, we strive to be a community where everyone feels seen, supported, and valued. Love and compassion aren't just values we talk about—they are the way we live, serve, and grow together.`

  const words = titleDesc.split(" ");
  const isLong = words.length > 20;
  const displayedText = showFull
    ? titleDesc
    : words.slice(0, 20).join(" ") + (isLong ? "..." : "");

  return (
    <section className="relative bg-white py-16 px-4 text-center">
      {/* Headline Section */}
      {/* <p className="text-xs uppercase text-gray-500 tracking-widest mb-2">Sub-headline</p> */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Love and Compassion</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-6">{displayedText}</p>
      <button className="bg-orange-200 text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-300 transition duration-300 mb-12" onClick={() => setShowFull(!showFull)}>
        {!showFull ? 'Read More' : 'View Less'}
      </button>

      {/* Image Grid */}
      <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap mb-16">
        <img
          src={'LoveImageOne'}
          alt="Person Praying"
     className="w-[200px] h-[320px] object-cover rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:shadow-3xl z-10 mt-15"
        />
          <img
            src={'LoveImageTwo'}
            alt="People Reading"
           className="w-[200px] h-[320px] object-cover rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:shadow-3xl z-10"
          />
        <img
          src={'LoveImageThree'}
          alt="Woman in Church"
         className="w-[200px] h-[320px] object-cover rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:shadow-3xl z-10 mt-15"
        />
      </div>

      {/* Bottom Section */}
      <Celebrate />
    </section>
  );
};

export default LoveCompassionSection;
