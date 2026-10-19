import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">



          <div className="flex gap-6">
            <a
              href="https://github.com/christrophe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/christo-evans-75276435b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
