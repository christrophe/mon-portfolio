import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";


function Contact() {

  const [formulaire, setFormulaire] = useState({
    nom: "",
    email: "",
    message: "",
  });


  const [envoye, setEnvoye] = useState(false);


  const gererChangement = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };


  const gererSoumission = (e) => {
    e.preventDefault();

    console.log("Formulaire soumis :", formulaire);

    setEnvoye(true);

    setTimeout(() => {
      setEnvoye(false);
      setFormulaire({ nom: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Me contacter
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Vous avez un projet en tête ? N&apos;hésitez pas à me contacter !
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Parlons de votre projet
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Je suis toujours ouvert aux nouvelles opportunités et
              collaborations. Que ce soit pour un stage, un projet freelance ou
              juste pour discuter tech, n&apos;hésitez pas !
            </p>


            <div className="flex items-center gap-4">
              <div className="bg-indigo-500/10 p-3 rounded-lg">
                <FaEnvelope className="text-indigo-400 text-xl" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-white">ngomaevan2001@gmail.com</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="bg-indigo-500/10 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Localisation</p>
                <p className="text-white">Dakar, Yoff</p>
              </div>
            </div>
          </div>


          <form
            onSubmit={gererSoumission}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 space-y-6"
          >

            <div>
              <label
                htmlFor="nom"
                className="block text-sm text-slate-300 mb-2"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formulaire.nom}
                onChange={gererChangement}
                required
                placeholder="Jean Dupont"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>


            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-300 mb-2"
              >
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formulaire.email}
                onChange={gererChangement}
                required
                placeholder="jean@exemple.com"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>


            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-300 mb-2"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                value={formulaire.message}
                onChange={gererChangement}
                required
                rows={5}
                placeholder="Décrivez votre projet ou votre idée..."
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>


            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
            >
              <FaPaperPlane /> Envoyer le message
            </button>


            {envoye && (
              <p className="text-green-400 text-center text-sm">
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
