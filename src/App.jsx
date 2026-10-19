import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import APropos from "./components/APropos";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Navbar />
      <Hero />
      <APropos />
      <Competences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
