import React from 'react';
import { FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ContactMe() {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-12 bg-gray-900 text-white" id='Contact-me'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">{t('navbar.contact_me')}</h2>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
        <div className="flex justify-center gap-12">
          <a
            href="https://github.com/OreoMajhesta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaGithub className="text-5xl mb-2" />
            <span className="text-xl font-semibold">GitHub</span>
          </a>
          <a
            href="https://wa.me/088216389495"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-green-400 hover:text-green-300 transition duration-300"
          >
            <FaWhatsapp className="text-5xl mb-2" />
            <span className="text-xl font-semibold">WhatsApp</span>
          </a>
          <a
            href="mailto:oreomajhestaa@gmail.com"
            className="flex flex-col items-center text-gray-400 hover:text-gray-300 transition duration-300"
          >
            <FaEnvelope className="text-5xl mb-2" />
            <span className="text-xl font-semibold">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
