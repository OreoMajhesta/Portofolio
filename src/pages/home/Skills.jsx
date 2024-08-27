import React, { useEffect } from 'react';
import { FaPhp, FaPython } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandKotlin } from "react-icons/tb";
import { SiArduino } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const SkillItem = ({ icon: Icon, title, description, iconColor, aos }) => (
  <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg" data-aos={aos}>
    <Icon className={`text-4xl mb-4 ${iconColor}`} />
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

const skills = [
  { icon: TbBrandKotlin, key: 'kotlin', iconColor: 'text-blue-500', aos: 'fade-up' },
  { icon: FaPython, key: 'python', iconColor: 'text-yellow-500', aos: 'fade-up' },
  { icon: FaPhp, key: 'php', iconColor: 'text-purple-500', aos: 'fade-up' },
  { icon: SiArduino, key: 'arduino', iconColor: 'text-green-700', aos: 'fade-up' },
  { icon: TbBrandCSharp, key: 'csharp', iconColor: 'text-[#9932CC]', aos: 'fade-up' }
];

export default function Skills() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-12 bg-gray-800 text-white" id="Skills">
      <div className="container mx-auto px-4 mb-64">
        <h2 className="text-3xl font-bold mb-8 text-center mt-10">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              title={t(`skills.${skill.key}.title`)}
              description={t(`skills.${skill.key}.description`)}
              iconColor={skill.iconColor}
              aos={skill.aos}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
