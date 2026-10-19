import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";


function Competences() {

  const competences = [
    { nom: "HTML5", icone: <FaHtml5 />, niveau: 90, couleur: "bg-orange-500" },
    { nom: "CSS3", icone: <FaCss3Alt />, niveau: 85, couleur: "bg-blue-500" },
    { nom: "JavaScript", icone: <FaJs />, niveau: 75, couleur: "bg-yellow-500" },
    { nom: "React", icone: <FaReact />, niveau: 70, couleur: "bg-cyan-500" },
    { nom: "Tailwind CSS", icone: <SiTailwindcss />, niveau: 80, couleur: "bg-teal-500" },
    { nom: "TypeScript", icone: <SiTypescript />, niveau: 50, couleur: "bg-blue-600" },
    { nom: "Node.js", icone: <FaNodeJs />, niveau: 55, couleur: "bg-green-500" },
    { nom: "MongoDB", icone: <SiMongodb />, niveau: 45, couleur: "bg-green-600" },
    { nom: "Git", icone: <FaGitAlt />, niveau: 65, couleur: "bg-red-500" },
  ];

  return (
    <section id="competences" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Mes compétences
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Les technologies que j&apos;utilise et que j&apos;apprends au quotidien
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competences.map((comp) => (
            <div
              key={comp.nom}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-slate-300">{comp.icone}</span>
                  <span className="text-white font-medium">{comp.nom}</span>
                </div>
                <span className="text-sm text-slate-400">{comp.niveau}%</span>
              </div>


              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className={`${comp.couleur} h-2.5 rounded-full transition-all duration-500`}
                  style={{ width: `${comp.niveau}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;
