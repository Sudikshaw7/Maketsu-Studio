import './index.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
