import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationCard = ({ degree, school, period, score, location, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-2xl border-white/5 hover:border-neon-blue/30 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-neon-blue/10 text-neon-blue">
          <GraduationCap size={24} />
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-soft-white/40 text-xs font-bold uppercase tracking-widest mb-1">
            <Calendar size={12} /> {period}
          </div>
          <div className="flex items-center gap-2 text-soft-white/40 text-xs font-bold uppercase tracking-widest">
            <MapPin size={12} /> {location}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-white font-poppins group-hover:text-neon-blue transition-colors">
        {degree}
      </h3>
      <h4 className="text-soft-white/60 font-medium mb-4">{school}</h4>
      
      {score && (
        <div className="inline-block px-4 py-1 rounded-full bg-neon-blue/5 border border-neon-blue/20 text-neon-blue text-sm font-bold">
          {score}
        </div>
      )}
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      degree: "UGC NET (Computer Science)",
      school: "Qualified",
      period: "Feb 2022",
      location: "India",
      score: "National Level"
    },
    {
      degree: "M.Tech (Computer Science & Engineering)",
      school: "Pursuing",
      period: "Present",
      location: "India",
      score: "Ongoing"
    },
    {
      degree: "MCA (Master of Computer Applications)",
      school: "Shobhit University, Gangoh",
      period: "2018 - 2020",
      location: "Gangoh, UP",
      score: "92% (First Division)"
    },
    {
      degree: "B.Sc (Computer Science)",
      school: "Shobhit University, Gangoh",
      period: "2015 - 2018",
      location: "Gangoh, UP",
      score: "87% (First Division)"
    }
  ];

  return (
    <section id="education" className="py-24 bg-dark-800/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-poppins">Educational <span className="text-gradient">Journey</span></h2>
          <p className="text-soft-white/60">Academic foundations and professional qualifications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
