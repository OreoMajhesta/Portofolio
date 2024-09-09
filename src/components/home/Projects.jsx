import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaMicrochip, FaGamepad } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { webProjects, mobileAppProjects, iotProjects, gameProjects } from '../../constants/data';


const getImagePath = (imageKey, language) => {
  if (imageKey === 'cs') {
    return language === 'indonesia' ? '/Project/segera.png' : '/Project/cm.png';
  }
  return `/Project/${imageKey}`;
};

const ProjectItem = ({ image, titleKey, descriptionKey, link }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language; 

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block transition-all hover:scale-105">
      <div className="flex flex-col items-center mb-10 bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
        <img src={getImagePath(image, language)} alt={t(titleKey)} className="w-full h-full object-cover mb-4 rounded" />
        <h3 className="text-xl font-semibold">{t(titleKey)}</h3>
        <p className="text-center md:min-h-20 xl:min-h-20">{t(descriptionKey)}</p>
      </div>
    </a>
  );
};


const ProjectCategory = ({ icon: Icon, titleKey, projects, iconColor }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <Icon className={`text-3xl md:text-4xl ${iconColor} mr-4`} />
        <h2 className="text-3xl md:text-4xl font-bold">{titleKey}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            titleKey={project.title}
            descriptionKey={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};


export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-800 text-white" id='Projects'>
      <h2 className="text-3xl font-bold mb-8 text-center mt-10">{t('projects.title')}</h2>
      <div className="container mx-auto px-4">
        <ProjectCategory
          icon={FaLaptopCode}
          titleKey={t('projects.web.title')}
          projects={webProjects}
          iconColor="text-blue-500"
        />
        <ProjectCategory
          icon={FaMobileAlt}
          titleKey={t('projects.mobile_app.title')}
          projects={mobileAppProjects}
          iconColor="text-green-500"
        />
        <ProjectCategory
          icon={FaMicrochip}
          titleKey={t('projects.iot.title')}
          projects={iotProjects}
          iconColor="text-red-500"
        />
        <ProjectCategory
          icon={FaGamepad}
          titleKey={t('projects.game.title')}
          projects={gameProjects}
          iconColor="text-purple-500"
        />
      </div>
    </section>
  );
}
