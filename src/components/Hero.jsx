import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import maPhoto from "../assets/photo.jpg"

function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          <div className="flex-1 text-center md:text-left">

            <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm mb-6 border border-indigo-500/30">
              👋 Bienvenue sur mon portfolio
            </span>


            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Salut, je suis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Junior Dev
              </span>
            </h1>


            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Développeur web passionné par la création d&apos;expériences
              numériques modernes et accessibles. J&apos;aime transformer des idées
              en applications web élégantes.
            </p>


            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projets"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg shadow-indigo-500/25"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-400 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Me contacter
              </a>
            </div>


            <div className="flex gap-6 justify-center md:justify-start mt-10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-2xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>


          <div className="flex-shrink-0">
            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>

              <div className="relative w-70 h-70 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20">

                <img src={maPhoto} alt="Ma photo" className="w-full h-full object-cover" />



                <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl">👨‍💻</span>
                </div>
              </div>


              <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-slate-900 shadow-lg">
                ✅ Disponible
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-16">
          <a
            href="#apropos"
            className="inline-block text-slate-500 animate-bounce text-3xl"
          >
            <HiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
