import React, { useState } from 'react';
import { HiLanguage } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const languages = ['english', 'indonesia'];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageOptions(false); 
  };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prev) => !prev);
  };

  return (
    <nav className="py-5 fixed top-0 z-50 w-full bg-gray-950">
      <div className="flex items-center justify-between px-4">
        <div className="flex-1"></div>
        <ul className="flex items-center gap-x-4 md:gap-x-8 text-white font-bold">
          <li>
            <a href="#" className="text-md underline-offset-4 hover:underline md:text-2xl">
              {t('navbar.about_us')}
            </a>
          </li>
          <li>
            <a href="#Skills" className="text-md underline-offset-4 hover:underline md:text-2xl">
              {t('navbar.skills')}
            </a>
          </li>
          <li>
            <a href="#Projects" className="text-md underline-offset-4 hover:underline md:text-2xl">
              {t('navbar.projects')}
            </a>
          </li>
          <li>
            <a href="#Contact-me" className="text-md underline-offset-4 hover:underline md:text-2xl">
              {t('navbar.contact_me')}
            </a>
          </li>
        </ul>

        <div className="flex-1 flex justify-end relative">
          <button
            onClick={toggleLanguageOptions}
            className="text-white font-bold flex items-center gap-x-1 md:text-2xl"
          >
            <HiLanguage className="text-2xl" /> 
            {t('navbar.lang')}
          </button>

          {showLanguageOptions && (
            <div className="absolute right-0 mt-2 w-32 bg-slate-500 text-black rounded-lg shadow-lg border border-gray-300">
            {languages.map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200 transition-colors duration-200"
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
          )}
        </div>

      </div>
    </nav>
  );
}
