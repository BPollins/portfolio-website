import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-1">{personalInfo.title}</p>
            <p className="text-gray-500 text-sm">{personalInfo.location}</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={`https://${personalInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
            <a 
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        {/* Powered By */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm font-mono">
            Built with React & FastAPI • Hosted on AWS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;