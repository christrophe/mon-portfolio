import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

// ==============================================
// À PROPOS - Section de présentation personnelle
// ==============================================
function APropos() {
  // Les cartes de présentation
  const cartes = [
    {
      icone: <FaCode className="text-3xl text-indigo-400" />,
      titre: "Passionné",
      description:
        "Je code depuis que j'ai découvert HTML/CSS. Chaque projet est une nouvelle aventure.",
    },
    {
      icone: <FaLaptopCode className="text-3xl text-purple-400" />,
      titre: "Créatif",
      description:
        "J'aime créer des interfaces belles et intuitives qui offrent une super expérience utilisateur.",
    },
    {
      icone: <FaRocket className="text-3xl text-pink-400" />,
      titre: "Motivé",
      description:
        "Toujours en train d'apprendre de nouvelles technologies et d'améliorer mes compétences.",
    },
  ];

  return (
    <section id="apropos" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          À propos de moi
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Découvrez qui je suis et ce qui me motive en tant que développeur
        </p>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cartes.map((carte) => (
            <div
              key={carte.titre}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icône */}
              <div className="bg-slate-700/50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                {carte.icone}
              </div>

              {/* Titre et description */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {carte.titre}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {carte.description}
              </p>
            </div>
          ))}
        </div>

        {/* Texte de présentation détaillée */}
        <div className="mt-16 bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 md:p-12">
          <p className="text-slate-300 text-lg leading-relaxed">
            Salut ! Je suis un <strong className="text-white">développeur web junior</strong> passionné
            par le monde du développement. Actuellement en apprentissage, je me
            concentre sur les technologies front-end comme{" "}
            <strong className="text-indigo-400">React</strong>,{" "}
            <strong className="text-indigo-400">Tailwind CSS</strong>, et{" "}
            <strong className="text-indigo-400">JavaScript</strong>. Mon objectif est de devenir
            un développeur fullstack capable de créer des applications web
            complètes et performantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default APropos;
