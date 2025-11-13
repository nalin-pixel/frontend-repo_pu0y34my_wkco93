import Navbar from '../Navbar';
import GlassCard from '../components/GlassCard';
import { useParams } from 'react-router-dom';

const members = {
  'kushal-jain': {
    name: 'Kushal Jain',
    role: 'Full-Stack Developer',
    skills: ['React', 'Node', 'MongoDB'],
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
    about: 'Builder of full-stack experiences with a love for clean UX and pragmatic engineering.' ,
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  'kiran-kumari': {
    name: 'Kiran Kumari',
    role: 'Automation & Integrations',
    skills: ['UiPath', 'Flask', 'SQL'],
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
    about: 'Automates the boring stuff and connects systems so products can scale fast.',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  'rajesh-kumar': {
    name: 'Rajesh Kumar',
    role: 'AI & Backend',
    skills: ['OpenAI', 'Flask', 'Python'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    about: 'Turns ideas into APIs and ships AI features that feel magic and reliable.',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/'
  },
};

export default function MemberProfile() {
  const { id } = useParams();
  const m = members[id];

  if (!m) {
    return (
      <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0b12] via-[#0b0f1a] to-[#0a0d14]">
        <Navbar />
        <div className="pt-32 mx-auto max-w-3xl px-4">Member not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0b12] via-[#0b0f1a] to-[#0a0d14]">
      <Navbar />
      <div className="pt-32 pb-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <GlassCard className="p-5 lg:col-span-1">
            <div className="aspect-square overflow-hidden rounded-xl mb-4">
              <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold">{m.name}</h1>
            <p className="text-gray-300">{m.role}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {m.skills.map((s) => (
                <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">{s}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a href={m.github} target="_blank" className="text-gray-300 hover:text-white underline">GitHub</a>
              <a href={m.linkedin} target="_blank" className="text-gray-300 hover:text-white underline">LinkedIn</a>
            </div>
          </GlassCard>

          <GlassCard className="p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-300 leading-relaxed">{m.about}</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
