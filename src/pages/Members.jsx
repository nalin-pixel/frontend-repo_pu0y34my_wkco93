import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';

const members = [
  {
    id: 'kushal-jain',
    name: 'Kushal Jain',
    role: 'Full-Stack Developer',
    skills: ['React', 'Node', 'MongoDB'],
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    id: 'kiran-kumari',
    name: 'Kiran Kumari',
    role: 'Automation & Integrations',
    skills: ['UiPath', 'Flask', 'SQL'],
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'AI & Backend',
    skills: ['OpenAI', 'Flask', 'Python'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/'
  }
];

export default function Members() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0b12] via-[#0b0f1a] to-[#0a0d14]">
      <Navbar />
      <div className="pt-32 pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Meet the Team</h2>
          <p className="text-gray-300 mt-2">Three makers. One mission: ship before the demo.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <GlassCard key={m.id} className="overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-gray-300">{m.role}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={m.github} target="_blank" className="text-gray-300 hover:text-white underline">GitHub</a>
                  <a href={m.linkedin} target="_blank" className="text-gray-300 hover:text-white underline">LinkedIn</a>
                </div>
                <div className="mt-5">
                  <Link to={`/members/${m.id}`} className="inline-block rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white px-4 py-2 shadow-lg shadow-fuchsia-500/20 hover:shadow-sky-500/20 transition">View Profile</Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
