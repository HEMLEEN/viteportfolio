// Features.tsx
import { useEffect } from 'react';
import { FaCode, FaPaintBrush, FaBolt } from 'react-icons/fa';

const features = [
  {
    title: 'Clean Code',
    description:
      'Writing maintainable, scalable, and efficient code that follows best practices',
    icon: <FaCode size={28} className="text-blue-500" />,
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually appealing interfaces that users love',
    icon: <FaPaintBrush size={28} className="text-blue-500" />,
  },
  {
    title: 'Performance',
    description:
      'Optimizing applications for speed, accessibility, and user experience',
    icon: <FaBolt size={28} className="text-blue-500" />,
  },
];

const Features = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#0D0D0D] py-16 px-6 md:px-20 text-white mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-800 bg-[#0F0F0F] p-8 text-center shadow-md hover:shadow-blue-500/10 transition duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#111827] rounded-full p-4">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
