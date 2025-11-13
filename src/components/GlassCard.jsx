import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
