import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Oreo Majhesta. All rights reserved.</p>
        </div>
        <div className="text-center">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-gray-300 transition duration-300 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-gray-300 transition duration-300 mx-2"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
