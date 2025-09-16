'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleAgendarCita = () => {
    window.open('https://wa.me/1234567890?text=Hola, quiero agendar una cita en Belle Siluette', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo con imagen y nombre */}
          <div className="flex items-center flex-shrink-0 pl-4 gap-3">
            <img
              src="/logo.jpg"
              alt="Logo Bella Siluette"
              className="h-12 w-12 rounded-full object-cover shadow-md border border-stone-200"
            />
            <h1 className="text-2xl lg:text-3xl font-light tracking-wider">
              <span className="text-stone-800">Belle</span>
              <span className="font-medium text-amber-600 ml-2">Siluette</span>
            </h1>
          </div>

          {/* Desktop Menu - MÁS SEPARADO */}
          <div className="hidden lg:flex items-center space-x-16">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 relative group px-4 py-2"
            >
              Inicio
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 relative group px-4 py-2"
            >
              Servicios
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('promociones')}
              className="text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 relative group px-4 py-2"
            >
              Promociones
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 relative group px-4 py-2"
            >
              Contacto
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* CTA Button - CON PADDING INTERNO Y DEL BORDE */}
          <div className="hidden lg:block pr-4">
            <button
              onClick={handleAgendarCita}
              className="px-10 py-4 bg-stone-800 text-white rounded-full font-medium tracking-wider hover:bg-stone-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Reservar Cita
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-stone-800 focus:outline-none transition-colors duration-300 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-stone-200">
            <div className="px-6 pt-6 pb-6 space-y-6 bg-white">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-6 py-4 text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 hover:bg-stone-50 rounded-xl"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-6 py-4 text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 hover:bg-stone-50 rounded-xl"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('promociones')}
                className="block w-full text-left px-6 py-4 text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 hover:bg-stone-50 rounded-xl"
              >
                Promociones
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-6 py-4 text-stone-600 hover:text-stone-800 font-light tracking-wider transition-colors duration-300 hover:bg-stone-50 rounded-xl"
              >
                Contacto
              </button>
              <button
                onClick={handleAgendarCita}
                className="w-full px-8 py-4 bg-stone-800 text-white rounded-2xl font-medium tracking-wider hover:bg-stone-700 transition-all duration-300 mt-6"
              >
                Reservar Cita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}