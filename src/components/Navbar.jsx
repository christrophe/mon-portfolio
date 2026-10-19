import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


function Navbar() {

  const [menuOuvert, setMenuOuvert] = useState(false);


  const liens = [
    { nom: "Accueil", href: "#accueil" },
    { nom: "À propos", href: "#apropos" },
    { nom: "Compétences", href: "#competences" },
    { nom: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <a href="#accueil" className="text-2xl font-bold text-white">
          Mon<span className="text-indigo-400">Portfolio</span>
        </a>


        <ul className="hidden md:flex gap-8">
          {liens.map((lien) => (
            <li key={lien.nom}>
              <a
                href={lien.href}
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"
              >
                {lien.nom}
              </a>
            </li>
          ))}
        </ul>


        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          {menuOuvert ? <HiX /> : <HiMenu />}
        </button>
      </div>


      {menuOuvert && (
        <ul className="md:hidden bg-slate-800 px-4 pb-4 space-y-3">
          {liens.map((lien) => (
            <li key={lien.nom}>
              <a
                href={lien.href}
                className="block text-slate-300 hover:text-indigo-400 py-2"
                onClick={() => setMenuOuvert(false)}
              >
                {lien.nom}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
