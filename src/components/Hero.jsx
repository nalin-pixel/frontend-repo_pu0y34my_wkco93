import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#0b0f1a] to-[#0a0d14]" />

      {/* Glow accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* Spline 3D */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
          >
            NO SLEEP 'TILL DEMO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-gray-300 text-lg"
          >
            We don’t sleep. We ship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              to="/projects"
              className="rounded-2xl px-5 py-3 bg-white/10 text-white backdrop-blur-xl border border-white/10 hover:bg-white/15 transition shadow-xl"
            >
              View Projects
            </Link>
            <Link
              to="/members"
              className="rounded-2xl px-5 py-3 bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-sky-500/20 transition"
            >
              Meet the Team
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="order-1 lg:order-2 h-[360px] sm:h-[480px] lg:h-[560px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </section>
  );
}
