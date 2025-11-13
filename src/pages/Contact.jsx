import Navbar from '../Navbar';
import GlassCard from '../components/GlassCard';

export default function Contact() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0b12] via-[#0b0f1a] to-[#0a0d14]">
      <Navbar />
      <div className="pt-32 pb-16 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-300 mt-1">Say hello — we reply fast during hackathons!</p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea rows="5" placeholder="Your message" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
            </div>
            <button type="button" className="w-full rounded-2xl px-5 py-3 bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-sky-500/20 transition">Send</button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
