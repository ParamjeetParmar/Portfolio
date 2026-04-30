import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative mb-12 md:flex justify-between items-center w-full ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="hidden md:block w-5/12"></div>
      
      <div className="z-20 flex items-center order-1 bg-neon-blue shadow-xl w-10 h-10 rounded-full border-4 border-dark-900 absolute left-[-20px] md:left-1/2 md:-translate-x-1/2">
        <Briefcase size={16} className="mx-auto text-dark-900" />
      </div>

      <div className="order-1 glass rounded-2xl border-white/10 w-full md:w-5/12 px-6 py-6 hover:border-neon-blue/30 transition-all group">
        <div className="flex items-center gap-2 text-neon-blue text-xs font-bold uppercase tracking-widest mb-2">
          <Calendar size={14} /> {period}
        </div>
        <h3 className="text-xl font-bold mb-1 text-white font-poppins group-hover:text-neon-blue transition-colors">{role}</h3>
        <h4 className="text-soft-white/60 font-medium mb-4">{company}</h4>
        <p className="text-sm text-soft-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Assistant Professor",
      company: "Quantum University, Roorkee",
      period: "2022 – Present",
      description: "Delivering advanced lectures in Computer Science, mentoring students for technical projects, and contributing to departmental research initiatives. Focused on IoT and AI-driven curriculum development."
    },
    {
      role: "Assistant Professor",
      company: "Hari Institute of Technology",
      period: "2020 – 2022",
      description: "Taught core CS subjects including OOPs, DBMS, and Web Technologies. Organized technical workshops and facilitated industry-academic collaborations."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-800/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-poppins">Professional <span className="text-gradient">Timeline</span></h2>
          <p className="text-soft-white/60">A journey of academic excellence and mentorship</p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute border-opacity-20 border-gray-400 h-full border left-[20px] md:left-1/2"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
