import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatCounter = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let timer = setInterval(() => {
        start += Math.ceil(end / (duration / 16));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="text-center p-6 glass rounded-2xl border-neon-blue/20 hover:border-neon-blue/50 transition-colors"
    >
      <div className="text-4xl font-black text-neon-blue mb-2 font-poppins">{count}+</div>
      <div className="text-sm uppercase tracking-widest text-soft-white/60 font-medium">{label}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 font-poppins">
              Pushing the Frontiers of <br />
              <span className="text-gradient">Computer Science</span>
            </h2>
            <p className="text-lg text-soft-white/70 leading-relaxed mb-8">
              With over 5 years of academic experience and a passion for emerging technologies, I bridge the gap between theoretical concepts and practical innovation. My journey is defined by a commitment to excellence, research-driven teaching, and mentoring the next generation of engineers.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-soft-white/80">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-blue font-bold">01</div>
                <p><span className="text-white font-bold">UGC NET Qualified</span> - Academic Excellence</p>
              </div>
              <div className="flex items-center gap-4 text-soft-white/80">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-violet font-bold">02</div>
                <p><span className="text-white font-bold">M.Tech Pursuing</span> - Continuous Learning</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <StatCounter value={5} label="Years Experience" delay={0.1} />
            <StatCounter value={10} label="Research Papers" delay={0.2} />
            <StatCounter value={15} label="Workshops" delay={0.3} />
            <StatCounter value={200} label="Students Mentored" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
