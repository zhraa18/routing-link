import { useState } from "react";
import Link from "next/link";
import { Home, User, Code, Briefcase, Phone, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 p-4 text-white w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center space-x-6">
        <NavItem href="/" icon={<User size={22} />} label="Home" />
        <NavItem href="/about" icon={<User size={22} />} label="About" />
        <NavItem href="/skills" icon={<Code size={22} />} label="Skills" />
        <NavItem href="/services" icon={<Briefcase size={22} />} label="Services" />
        <NavItem href="/portfolio" icon={<Home size={22} />} label="Portfolio" />
        <NavItem href="/contact" icon={<Phone size={22} />} label="Contact" />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-indigo-800 p-4 rounded-lg">
          <NavItem href="/" icon={<User size={22} />} label="Home" />
          <NavItem href="/about" icon={<User size={22} />} label="About" />
          <NavItem href="/skills" icon={<Code size={22} />} label="Skills" />
          <NavItem href="/services" icon={<Briefcase size={22} />} label="Services" />
          <NavItem href="/portfolio" icon={<Home size={22} />} label="Portfolio" />
          <NavItem href="/contact" icon={<Phone size={22} />} label="Contact" />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, icon, label }) => (
  <Link href={href} className="flex items-center space-x-2 hover:text-yellow-300">
    {icon} <span className="text-lg font-semibold">{label}</span>
  </Link>
);

export default Navbar;