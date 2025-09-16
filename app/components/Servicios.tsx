'use client';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  precioOriginal: string;
  duracion: string;
  categoria: 'femenino' | 'masculino';
}

export default function Servicios() {
  const servicios: Servicio[] = [
    {
      id: 1,
      nombre: "Corte Dama Premium",
      descripcion: "Corte de cabello dama, con asesoria de imagen y cierre tecnico.",
      precio: "7,500",
      precioOriginal: "14,500",
      duracion: "20 min",
      categoria: "femenino"
    },
    {
      id: 2,
      nombre: "Masaje Dama",
      descripcion: "Masaje capilar con ampolla o masara hidratante.",
      precio: "10,000",
      precioOriginal: "20,000",
      duracion: "20 min",
      categoria: "femenino"
    },
    {
      id: 3,
      nombre: "Lavado",
      descripcion: "Lavado capilar, limpieza profunda",
      precio: "2,500",
      precioOriginal: "4,500",
      duracion: "10 min",
      categoria: "femenino"
    },
    {
      id: 4,
      nombre: "Brushing",
      descripcion: "Secado, tecnica profesional entrega volumen, brillo y movimiento.",
      precio: "5,000",
      precioOriginal: "10,000",
      duracion: "10 min",
      categoria: "femenino"
    },
    {
      id: 5,
      nombre: "Corte Varon Premium",
      descripcion: "Corte de cabello varon, asesoria de imagen y aplicacion de productos profesionales.",
      precio: "10,000",
      precioOriginal: "20,000",
      duracion: "25 min",
      categoria: "masculino"
    },
    {
      id: 6,
      nombre: "Exfoliacion Facial",
      descripcion: "Exfoliacion facial con productos profesionales",
      precio: "5,000",
      precioOriginal: "10,000",
      duracion: "10 min",
      categoria: "masculino"
    },
    {
      id: 7,
      nombre: "Toalla Caliente",
      descripcion: "Toalla caliente clasica para abrir poros antes del afeitado",
      precio: "3,000",
      precioOriginal: "6,000",
      duracion: "10 min",
      categoria: "masculino"
    },
    {
      id: 8,
      nombre: "Barba",
      descripcion: "Afeitado clasico con navaja y cierre tecnico de poros",
      precio: "9,990",
      precioOriginal: "18,990",
      duracion: "15 min",
      categoria: "masculino"
    }
  ];

  const handleAgendarServicio = (servicio: string) => {
    window.open(`https://wa.me/1234567890?text=Hola, quiero agendar: ${servicio}`, '_blank');
  };

  const serviciosFemeninos = servicios.filter(s => s.categoria === 'femenino');
  const serviciosMasculinos = servicios.filter(s => s.categoria === 'masculino');

  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header con mucho espacio */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center px-4 py-2 bg-stone-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
            <span className="text-stone-600 text-sm font-medium tracking-widest uppercase">Nuestros Servicios</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-light text-stone-800 mb-8 tracking-tight">
            Experiencias
            <br />
            <span className="font-medium text-amber-600">Excepcionales</span>
          </h2>
          
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Servicios profesionales diseñados para realzar tu belleza natural con técnicas modernas y productos premium
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        {/* Servicios Femeninos */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-light text-stone-800 mb-4 tracking-wide">
              Servicios Femeninos
            </h3>
            <div className="w-16 h-px bg-rose-300 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {serviciosFemeninos.map((servicio, index) => (
              <div 
                key={servicio.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-rose-50 to-stone-50 rounded-3xl p-10 h-full hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-rose-200">
                  
                  {/* Header de la tarjeta */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-stone-500 font-medium tracking-widest uppercase">
                        {servicio.duracion}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-medium text-stone-800 mb-4 tracking-wide">
                      {servicio.nombre}
                    </h4>
                    <p className="text-stone-600 leading-relaxed font-light">
                      {servicio.descripcion}
                    </p>
                  </div>

                  {/* Precios */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-light text-stone-800">
                        ${servicio.precio}
                      </span>
                      <span className="text-lg text-stone-400 line-through font-light">
                        ${servicio.precioOriginal}
                      </span>
                    </div>
                    <div className="text-sm text-rose-600 font-medium">
                      50% de descuento
                    </div>
                  </div>

                  {/* Botón */}
                  <button
                    onClick={() => handleAgendarServicio(servicio.nombre)}
                    className="w-full py-4 border-2 border-stone-200 text-stone-700 rounded-full font-medium tracking-wide hover:border-rose-300 hover:text-rose-600 transition-all duration-300 group-hover:bg-white"
                  >
                    Reservar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios Masculinos */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-light text-stone-800 mb-4 tracking-wide">
              Servicios Masculinos
            </h3>
            <div className="w-16 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {serviciosMasculinos.map((servicio, index) => (
              <div 
                key={servicio.id}
                className="group relative"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-10 h-full hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-amber-200">
                  
                  {/* Header de la tarjeta */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-stone-500 font-medium tracking-widest uppercase">
                        {servicio.duracion}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-medium text-stone-800 mb-4 tracking-wide">
                      {servicio.nombre}
                    </h4>
                    <p className="text-stone-600 leading-relaxed font-light">
                      {servicio.descripcion}
                    </p>
                  </div>

                  {/* Precios */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-light text-stone-800">
                        ${servicio.precio}
                      </span>
                      <span className="text-lg text-stone-400 line-through font-light">
                        ${servicio.precioOriginal}
                      </span>
                    </div>
                    <div className="text-sm text-amber-600 font-medium">
                      50% de descuento
                    </div>
                  </div>

                  {/* Botón */}
                  <button
                    onClick={() => handleAgendarServicio(servicio.nombre)}
                    className="w-full py-4 border-2 border-stone-200 text-stone-700 rounded-full font-medium tracking-wide hover:border-amber-400 hover:text-amber-700 transition-all duration-300 group-hover:bg-white"
                  >
                    Reservar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final Elegante */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-16 text-white relative overflow-hidden">
            
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                ¿Listo para una nueva
                <br />
                <span className="font-medium text-amber-400">experiencia?</span>
              </h3>
              
              <p className="text-xl font-light text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Reserva tu consulta personalizada y descubre cómo podemos realzar tu belleza natural
              </p>
              
              <button
                onClick={() => window.open('https://wa.me/1234567890?text=Hola, quiero una consulta personalizada', '_blank')}
                className="inline-flex items-center px-10 py-4 bg-white text-stone-800 rounded-full font-medium tracking-wide hover:bg-stone-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <span className="mr-3">Consulta Personalizada</span>
                <span className="text-amber-600">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}