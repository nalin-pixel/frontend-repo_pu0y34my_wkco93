import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/members', label: 'Team' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase = 'text-gray-300 hover:text-white transition-colors';
  const active = 'text-white';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <Link to="/" className="text-white font-semibold tracking-wide">
              <span className="inline-block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">NO SLEEP</span>
              <span className="text-gray-300"> ’TILL DEMO</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/projects"
                className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white px-4 py-2 shadow-lg shadow-fuchsia-500/20 hover:shadow-sky-500/20 transition"
              >
                View Projects
              </Link>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/projects"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white px-4 py-2 shadow-lg shadow-fuchsia-500/20 hover:shadow-sky-500/20 transition"
              >
                View Projects
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
