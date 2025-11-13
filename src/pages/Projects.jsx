import Navbar from '../Navbar';
import GlassCard from '../components/GlassCard';

const projects = [
  {
    title: 'Student Marksheet Portal',
    stack: ['Flask', 'SQL', 'UiPath'],
    desc: 'A portal to manage student marksheets with automated workflows powered by UiPath.',
  },
  {
    title: 'Spice E-commerce',
    stack: ['React', 'WhatsApp API'],
    desc: 'A storefront for spices with direct WhatsApp ordering and instant notifications.',
  },
  {
    title: 'AI Chatbot',
    stack: ['Flask', 'OpenAI'],
    desc: 'An intelligent chatbot for FAQs and task automation, backed by OpenAI APIs.',
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0b12] via-[#0b0f1a] to-[#0a0d14]">
      <Navbar />
      <div className="pt-32 pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-300 mt-2">Selected builds shipped by the team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <GlassCard key={p.title} className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">{s}</span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
