import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl"
          >
            Hi, I'm <span className="text-gradient">Harshit</span> <br />
            Java Developer & ML Enthusiast
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            I'm a 3rd-year Computer Science student passionate about building scalable Java applications and training intelligent Machine Learning models. Let's build something amazing together.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group">
                View Projects 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/10 text-white border border-white/20 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-[40px] bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

    </section>
  );
};

export default Hero;
