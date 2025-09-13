'use client';

import React from 'react';

export default function Hero() {
  const handleAgendarCita = () => {
    window.open('https://wa.me/1234567890?text=Hola, quiero agendar una cita', '_blank');
  };

  const scrollToServicios = () => {
    const section = document.getElementById('servicios');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50 flex items-center overflow-hidden pt-20">
      {/* Elementos decorativos minimalistas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-stone-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-32 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Contenido izquierdo - CON MÁS PADDING */}
        <div className="space-y-16 pl-8 lg:pl-12">
          {/* Badge elegante */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200 shadow-sm">
            <span className="w-3 h-3 bg-amber-400 rounded-full mr-4"></span>
            <span className="text-stone-600 text-sm font-medium tracking-widest uppercase">
              Salón de Belleza Premium
            </span>
          </div>

          {/* Título principal - MEJOR SPACING */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-light text-stone-800 leading-tight tracking-wider">
              <span className="block mb-4">Bella</span>
              <span className="font-medium text-amber-600 block">Siluette</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 font-light leading-relaxed max-w-xl tracking-wide">
              Experiencia de belleza excepcional con técnicas profesionales 
              y productos de lujo
            </p>
          </div>

          {/* Botones elegantes - MÁS SEPARADOS */}
          <div className="flex flex-col sm:flex-row gap-8">
            <button
              onClick={handleAgendarCita}
              className="group px-12 py-5 bg-stone-800 text-white rounded-full font-medium tracking-wider hover:bg-stone-700 transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
            >
              <span className="mr-3">Agendar Cita</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            
            <button
              onClick={scrollToServicios}
              className="px-12 py-5 border-2 border-stone-300 text-stone-700 rounded-full font-medium tracking-wider hover:bg-stone-50 hover:border-stone-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Servicios
            </button>
          </div>

          {/* Stats elegantes - MÁS ESPACIADOS */}
          <div className="flex flex-wrap items-center gap-16 pt-12 border-t border-stone-200">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-light text-stone-800 tracking-wide">500+</div>
              <div className="text-sm text-stone-600 tracking-widest uppercase mt-2">
                Clientes Satisfechos
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-light text-stone-800 tracking-wide">5★</div>
              <div className="text-sm text-stone-600 tracking-widest uppercase mt-2">
                Calificación Promedio
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-light text-stone-800 tracking-wide">10+</div>
              <div className="text-sm text-stone-600 tracking-widest uppercase mt-2">
                Años de Experiencia
              </div>
            </div>
          </div>
        </div>

        {/* Imagen derecha - MÁS SEPARADA */}
        <div className="relative lg:pl-8">
          <div className="relative z-10">
            {/* Placeholder para imagen principal */}
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-stone-200 rounded-3xl shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-600">
                <div className="text-center">
                  <div className="text-8xl mb-6">✨</div>
                  <div className="text-2xl font-medium tracking-wide mb-2">Imagen Principal</div>
                  <div className="text-lg text-stone-500 tracking-wide">del Salón</div>
                </div>
              </div>
            </div>
            
            {/* Card flotante - MÁS SEPARADA */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-stone-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <span className="text-amber-600 text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-lg font-medium text-stone-800 tracking-wide">
                    Promoción Especial
                  </div>
                  <div className="text-sm text-stone-600 tracking-wide">
                    50% descuento
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos - MEJOR POSICIONADOS */}
          <div className="absolute top-16 -right-16 w-32 h-32 border-2 border-amber-200 rounded-full"></div>
          <div className="absolute -top-8 right-32 w-4 h-4 bg-amber-400 rounded-full"></div>
          <div className="absolute bottom-32 -right-8 w-3 h-3 bg-stone-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}