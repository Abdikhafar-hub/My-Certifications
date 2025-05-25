
import React from 'react';
import { User, Link, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Abdikhafar Issack</h2>
            <p className="text-gray-600 max-w-md">
              Software Engineer & Cyber Security Analyst with expertise in web development,
              machine learning, and cybersecurity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <a href="https://www.linkedin.com/in/abdikhafar-issack/" className="flex items-center gap-2 text-gray-600 hover:text-brand-purple transition-colors">
              <User className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Abdikhafar-hub" className="flex items-center gap-2 text-gray-600 hover:text-brand-purple transition-colors">
              <Link className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a href="https://my-portfolio-abdikhafar.vercel.app/" className="flex items-center gap-2 text-gray-600 hover:text-brand-purple transition-colors">
              <FileText className="h-5 w-5" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Abdikhafar Issack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
