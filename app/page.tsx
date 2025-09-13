import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Promociones from './components/Promociones';
import Contacto from './components/Contacto';

export default function Home() {
  return (
    <div className="page-container min-h-screen bg-white w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Servicios />
        <Promociones />
        <Contacto />
      </main>
    </div>
  );
}