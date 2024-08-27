import React from 'react';
import BootCamp from './components/BootCamp';
import { GoDownload } from "react-icons/go";
import { useTranslation } from 'react-i18next';

const handleDownload = () => {
  const cvUrl = '/public/Oreo_Majhesta_CV.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', 'CV_Oreo_Majhesta.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const BootCampList = ({ BootCampDetail, BootCampName }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
      <span className="text-white font-bold">1</span>
    </div>
    <div>
      <p href={BootCampDetail} className="text-lg font-semibold">{BootCampName}</p>
    </div>
  </div>
)

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <header className="bg-gray-900 text-white py-14 mt-14">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-around mb-20">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-60 md:h-60 rounded-full border-4 border-blue-600 mb-4 md:mb-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{t('hero.name')}</h1>
            <p className="text-lg mb-4">{t('hero.specialization')}</p>
          </div>
        </div>
        <div className="mt-6 md:mt-3 md:ml-12 sm:mt-8">
          <h1 className="text-slate-50 text-3xl font-extrabold lg:text-5xl lg:text-left max-w-md font-oswald">
            {t('hero.intro')}
          </h1>
          <p className="mt-6 md:text-left text-lg max-w-md">
          {t('hero.welcome')}
          </p>
          <button
            className="mt-5 w-44 h-10 bg-red-500 rounded-md flex items-center justify-center gap-x-2 text-white text-center text-lg"
            onClick={handleDownload}
          >
            <GoDownload className="text-xl" />
            <span>{t('hero.download_cv')}</span>
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-12 mb-32">
        <div className="relative flex flex-col md:flex-row">
          <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-gray-600"></div>
          <div className="flex-1 p-6 md:pr-12">
            <h2 className="text-2xl font-bold mb-4">{t('education.title')}</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">{t('education.school1.name')}</p>
                  <p>{t('education.school1.specialization')}</p>
                  <p>{t('education.school1.graduation')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">{t('education.school2.name')}</p>
                  <p>{t('education.school2.graduation')}</p>
                </div>
              </div>
            </div>
          </div>
          <BootCamp />
        </div>
      </div>
    </header>
  );
}
