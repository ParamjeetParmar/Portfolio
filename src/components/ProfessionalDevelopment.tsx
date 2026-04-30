import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const FDPItem = ({ title, organization, duration, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all group"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-lg bg-neon-violet/10 flex items-center justify-center text-neon-violet group-hover:bg-neon-violet group-hover:text-dark-900 transition-all">
          <Award size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold mb-1 group-hover:text-neon-violet transition-colors">{title}</h3>
        <p className="text-soft-white/60 text-sm font-medium">{organization}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] font-black uppercase tracking-tighter bg-neon-violet/10 text-neon-violet px-2 py-0.5 rounded">
            {duration}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
            <CheckCircle2 size={10} /> Completed
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProfessionalDevelopment = () => {
  const fdps = [
    {
      title: 'Problem solving in C (NPTEL)',
      organization: 'NPTEL / SWAYAM',
      duration: '12 Weeks'
    },
    {
      title: 'NAAC Criteria-1 & Criteria-2',
      organization: 'Offline FDP',
      duration: '3 Weeks'
    },
    {
      title: 'AI, ML & NLP Interdisciplinary Approach',
      organization: 'RIT, Roorkee',
      duration: 'FDP'
    },
    {
      title: 'AARAMBH-4 DAYS FDP and AMA Program',
      organization: 'Quantum University, Roorkee',
      duration: '1 Week'
    },
    {
      title: 'Next Gen innovation: AI blockchain and AR/VR',
      organization: 'AICTE Training and ATAL Academy',
      duration: '1 Week'
    },
    {
      title: 'Artificial Intelligence for science and engineering',
      organization: 'NIT Nagaland',
      duration: '1 Week'
    },
    {
      title: 'Drone Technology',
      organization: 'Electronics & ICT Academy, C-DAC Patna',
      duration: '1 Week'
    },
    {
      title: 'Case Study Workshop on Business Transformation',
      organization: 'Quantum University',
      duration: '3 Days'
    }
  ];

  return (
    <section id="fdp" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-poppins">Professional <span className="text-gradient">Development</span></h2>
            <p className="text-soft-white/60">Continuous learning through Faculty Development Programs and specialized workshops.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fdps.map((fdp, index) => (
            <FDPItem key={index} {...fdp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
