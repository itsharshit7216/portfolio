import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darker py-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Harshit. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-secondary transition-colors">
            <Twitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
