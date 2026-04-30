import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { BookOpen, Award, FileText, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const ResearchCard = ({ title, type, category, date, description, patentNo, status }: any) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1500}
      scale={1.02}
      className="flex-shrink-0 w-[350px] md:w-[450px] snap-center flex"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-2xl border-white/5 hover:border-neon-violet/30 transition-all flex flex-col relative overflow-hidden w-full h-[450px]"
      >
        {status === 'Granted' && (
          <div className="absolute top-0 right-0">
            <div className="bg-emerald-500 text-dark-900 text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <CheckCircle size={10} /> {status}
            </div>
          </div>
        )}

        <div className="flex justify-between items-start mb-6 shrink-0">
          <div className={`p-3 rounded-xl ${type === 'Patent' ? 'bg-neon-blue/10 text-neon-blue' : 'bg-neon-violet/10 text-neon-violet'}`}>
            {type === 'Patent' ? <Award size={24} /> : <BookOpen size={24} />}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-soft-white/40">{date}</span>
        </div>
        
        <div className="flex-grow flex flex-col overflow-hidden">
          <div className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2 shrink-0">{category}</div>
          <h3 className="text-xl font-bold mb-4 text-white font-poppins leading-tight line-clamp-2 h-[3.5rem] shrink-0">{title}</h3>
          <p className="text-sm text-soft-white/60 leading-relaxed mb-4 line-clamp-5 overflow-hidden">
            {description}
          </p>
          {patentNo && (
            <div className="mt-auto shrink-0">
              <div className="text-xs font-mono text-neon-blue/80 bg-neon-blue/5 border border-neon-blue/20 rounded-lg px-3 py-2 inline-block">
                Patent No: {patentNo}
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-white/5 shrink-0">
          <span className="flex items-center gap-2 text-xs font-bold text-soft-white/40">
            <FileText size={14} /> {type}
          </span>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Research = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const works = [
    {
      title: "IoT-Based Real-Time Carbon Monitoring in Urban and Agricultural Areas",
      type: "Book Chapter",
      category: "IoT & Sustainability",
      date: "2023",
      description: "Published in 'Advanced Systems for Monitoring Carbon Sequestration'. Research on utilizing IoT frameworks for real-time monitoring of carbon sequestration in diverse ecological environments."
    },
    {
      title: "Real-time IoT based Carbon Footprint Monitoring System",
      type: "IEEE Publication",
      category: "IoT & Sustainability",
      date: "2024",
      description: "A comprehensive framework for monitoring industrial emissions using a distributed sensor network and real-time data analytics."
    },
    {
      title: "System and method for Analyzing User History",
      type: "Patent",
      category: "Data Analytics",
      date: "2025",
      patentNo: "202221054764",
      status: "Granted",
      description: "A novel architecture and methodology for deep analysis of historical user data to derive predictive behavioral patterns and insights."
    },
    {
      title: "System and method for Identifying Genuine Products",
      type: "Patent",
      category: "Security & Authentication",
      date: "2025",
      patentNo: "202221063526",
      description: "An advanced identification system designed to verify product authenticity and prevent counterfeiting using secure tracking technology."
    }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-poppins">Research & <span className="text-gradient">Innovations</span></h2>
            <p className="text-soft-white/60 max-w-2xl">Contributing to the global knowledge pool through publications and intellectual property.</p>
          </div>
          
          <div className="flex gap-2 md:gap-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-3 md:p-4 rounded-full glass border-white/5 hover:border-neon-violet/30 text-soft-white hover:text-neon-violet transition-all shadow-lg"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 md:p-4 rounded-full glass border-white/5 hover:border-neon-violet/30 text-soft-white hover:text-neon-violet transition-all shadow-lg"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x scrollbar-hide no-scrollbar -mx-4 px-4 scroll-smooth items-stretch"
        >
          {works.map((work, index) => (
            <ResearchCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
