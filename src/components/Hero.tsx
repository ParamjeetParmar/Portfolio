import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <Zap size={14} className="fill-neon-blue" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-white font-poppins"
        >
          Reshoo <span className="text-gradient">Devi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-soft-white/80 font-medium mb-10 h-12"
        >
          <Typewriter
            words={['Assistant Professor', 'CS Researcher', 'IoT Enthusiast', 'AI/ML Explorer']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#research"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 245, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-neon-blue text-dark-900 rounded-xl font-bold flex items-center gap-3 transition-all"
          >
            View Research <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="/Resume.pdf"
            download="Reshu_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 hover:border-neon-violet/50 rounded-xl font-bold backdrop-blur-sm hover:bg-neon-violet/5 transition-all text-white flex items-center gap-2"
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-soft-white/60 hover:text-white transition-all font-bold"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:text-neon-blue transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-soft-white/40 group-hover:text-neon-blue transition-colors">Scroll to Explore</span>
        <ChevronDown className="text-neon-blue animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
