import { useState } from "react";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 150;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden px-10 py-6 backdrop-blur-lg lg:mt-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <a href="#" onClick={(event) => handleScroll(event, "#")}>
          <img src={logo} width={80} height={80} alt="logo" />
        </a>

        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link) => (
            <a
              href={`#${link.targetId}`}
              key={link.targetId}
              className="border-l-2 border-neutral-300/40 pl-2 text-sm hover:border-neutral-300/80 hover:opacity-50"
              onClick={(event) => handleScroll(event, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link) => (
            <a
              href={`#${link.targetId}`}
              key={link.targetId}
              className="block p-4 uppercase tracking-tighter hover:opacity-50"
              onClick={(event) => handleScroll(event, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
