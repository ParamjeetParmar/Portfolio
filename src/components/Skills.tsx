import { motion } from 'framer-motion';

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold text-soft-white tracking-wider">{name}</span>
        <span className="text-xs font-bold text-neon-blue">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-neon-blue to-neon-violet shadow-[0_0_10px_rgba(0,245,255,0.5)]"
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const academicSkills = [
    { name: "Object Oriented Programming", level: 90 },
    { name: "Database Management Systems", level: 85 },
    { name: "Web Technologies", level: 88 },
    { name: "Cloud Computing", level: 80 },
    { name: "Data Structure & Algorithm", level: 85 },
    { name: "Theory of Computation", level: 75 },
    { name: "Graph Theory", level: 80 },
    { name: "Discrete Mathematics", level: 82 }
  ];

  const researchSkills = [
    { name: "Internet of Things (IoT)", level: 92 },
    { name: "Artificial Intelligence", level: 75 },
    { name: "Machine Learning", level: 78 },
    { name: "Academic Research Writing", level: 95 }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-poppins">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-soft-white/60">A blend of academic depth and practical implementation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-3xl border-white/5"
          >
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-neon-blue rounded-full"></span>
              Core Academic Domains
            </h3>
            {academicSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-3xl border-white/5"
          >
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-neon-violet rounded-full"></span>
              Research & Innovation
            </h3>
            {researchSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} index={index} />
            ))}
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['NLP', 'Blockchain', 'Cybersecurity', 'Smart Cities', 'Data Analytics', 'AgriTech'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-2 rounded-full border border-white/10 glass text-xs font-bold text-soft-white/60 hover:border-neon-blue/40 hover:text-neon-blue transition-all cursor-default"
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
