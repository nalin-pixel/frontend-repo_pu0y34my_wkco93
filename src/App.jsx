import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:id" element={<MemberProfile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
