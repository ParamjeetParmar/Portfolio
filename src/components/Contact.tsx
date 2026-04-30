import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 font-poppins">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-lg text-soft-white/60 mb-12">
              Interested in research collaboration, academic discussions, or mentoring opportunities? Feel free to reach out. I'm always open to exploring new frontiers in technology.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <motion.a
                href="mailto:chaudharyreshoo@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-full md:w-80 p-8 rounded-3xl glass border-white/5 hover:neon-border transition-all flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                  <Mail size={32} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-soft-white/40 mb-1">Email Me</div>
                  <div className="text-white font-medium text-lg">chaudharyreshoo@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/reshoo-devi-101306240/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-full md:w-80 p-8 rounded-3xl glass border-white/5 hover:border-neon-violet/50 transition-all flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-neon-violet/10 flex items-center justify-center text-neon-violet">
                  <Globe size={32} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-soft-white/40 mb-1">LinkedIn</div>
                  <div className="text-white font-medium text-lg">Reshoo Devi</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 py-12 border-t border-white/5 text-center">
        <p className="text-soft-white/40 text-sm tracking-widest font-medium">
          © 2026 RESHOO DEVI. DESIGNED FOR THE FUTURE.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
