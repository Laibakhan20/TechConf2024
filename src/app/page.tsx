import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Speaker from "./components/Speaker";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      
      <About />
      <Speaker />
      <Schedule />

      
      <Footer />
    </div>
    
  );
}
