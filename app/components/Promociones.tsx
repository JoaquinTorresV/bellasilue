'use client';

interface Promocion {
  id: string;
  categoria: 'femenino' | 'masculino';
  titulo: string;
  descripcion: string;
  servicios: string[];
  precioFinal: string;
  precioOriginal: string;
  ahorro: string;
}

export default function Promociones() {
  const handleAgendarPromocion = (promocion: string) => {
    window.open(`https://wa.me/1234567890?text=Hola, quiero agendar: ${promocion}`, '_blank');
  };

  const promociones: Promocion[] = [
    {
      id: 'femenino',
      categoria: 'femenino',
      titulo: 'Pack Premium Dama',
      descripcion: 'Disfruta de un paquete completo para dama que incluye corte, masaje capilar, lavado, brushing y masaje corporal.',
      servicios: [
        'Corte Dama Premium',
        'Masaje Dama',
        'Lavado',
        'Brushing',
        'Masaje Corporal'
      ],
      precioFinal: '25,000',
      precioOriginal: '35,000',
      ahorro: '10,000'
    },
    {
      id: 'masculino',
      categoria: 'masculino',
      titulo: 'Pack Premium Varón',
      descripcion: 'Paquete especial para varón con corte, exfoliación facial, toalla caliente y barba.',
      servicios: [
        'Corte Varon Premium',
        'Exfoliacion Facial',
        'Toalla Caliente',
        'Barba'
      ],
      precioFinal: '25,000',
      precioOriginal: '35,000',
      ahorro: '10,000'
    }
  ];

  const beneficios = [
    {
      titulo: "Atención Personalizada",
      descripcion: "Consulta individual para crear tu look perfecto",
      icono: "👤"
    },
    {
      titulo: "Productos Premium",
      descripcion: "Marcas internacionales de la más alta calidad",
      icono: "✨"
    },
    {
      titulo: "Ambiente Exclusivo",
      descripcion: "Instalaciones diseñadas para tu comodidad total",
      icono: "🏛️"
    },
    {
      titulo: "Garantía Total",
      descripcion: "100% satisfacción garantizada en cada servicio",
      icono: "🛡️"
    }
  ];

  return (
    <section id="promociones" className="py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header elegante */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
            <span className="text-stone-700 text-sm font-medium tracking-widest uppercase">Promociones Exclusivas</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-light text-stone-800 mb-8 tracking-tight">
            Experiencias
            <br />
            <span className="font-medium text-amber-600">Premiun</span>
          </h2>
          
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Descubre nuestros paquetes exclusivos diseñados para ofrecerte una experiencia de belleza completa y transformadora
          </p>

          <div className="flex items-center justify-center gap-4 text-stone-500">
            <div className="w-16 h-px bg-stone-300"></div>
            <span className="text-sm font-medium tracking-widest uppercase">50% Descuento</span>
            <div className="w-16 h-px bg-stone-300"></div>
          </div>
        </div>

        {/* Grid de promociones */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {promociones.map((promocion, index) => (
            <div 
              key={promocion.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`relative overflow-hidden rounded-3xl p-12 h-full transition-all duration-500 hover:shadow-2xl border-2 ${
                promocion.categoria === 'femenino' 
                  ? 'bg-gradient-to-br from-rose-50 to-stone-50 border-rose-100 hover:border-rose-200' 
                  : 'bg-gradient-to-br from-amber-50 to-stone-50 border-amber-100 hover:border-amber-200'
              }`}>
                
                {/* Elemento decorativo */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${
                  promocion.categoria === 'femenino' ? 'bg-rose-300' : 'bg-amber-300'
                }`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        promocion.categoria === 'femenino' ? 'bg-rose-100' : 'bg-amber-100'
                      }`}>
                        <div className={`w-8 h-8 rounded-full ${
                          promocion.categoria === 'femenino' ? 'bg-rose-400' : 'bg-amber-500'
                        }`}></div>
                      </div>
                      
                      <div className={`px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase ${
                        promocion.categoria === 'femenino' 
                          ? 'bg-rose-100 text-rose-600' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        50% Descuento
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-medium text-stone-800 mb-4 tracking-wide">
                      {promocion.titulo}
                    </h3>
                    <p className="text-stone-600 leading-relaxed font-light text-lg">
                      {promocion.descripcion}
                    </p>
                  </div>

                  {/* Servicios incluidos */}
                  <div className="mb-10">
                    <h4 className="text-sm font-medium text-stone-700 tracking-widest uppercase mb-6">
                      Servicios Incluidos
                    </h4>
                    <div className="space-y-4">
                      {promocion.servicios.map((servicio, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full ${
                            promocion.categoria === 'femenino' ? 'bg-rose-400' : 'bg-amber-500'
                          }`}></div>
                          <span className="text-stone-700 font-light">{servicio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precios */}
                  <div className="mb-10">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-4xl font-light text-stone-800">
                        ${promocion.precioFinal}
                      </span>
                      <span className="text-xl text-stone-400 line-through font-light">
                        ${promocion.precioOriginal}
                      </span>
                    </div>
                    <div className={`text-lg font-medium ${
                      promocion.categoria === 'femenino' ? 'text-rose-600' : 'text-amber-600'
                    }`}>
                      Ahorras ${promocion.ahorro}
                    </div>
                  </div>

                  {/* Botón */}
                  <button
                    onClick={() => handleAgendarPromocion(promocion.titulo)}
                    className={`w-full py-5 rounded-2xl font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                      promocion.categoria === 'femenino'
                        ? 'bg-rose-600 hover:bg-rose-700 text-white'
                        : 'bg-amber-600 hover:bg-amber-700 text-white'
                    }`}
                  >
                    Reservar Experiencia
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-light text-stone-800 mb-6 tracking-wide">
              La Diferencia Bella Siluette
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-stone-200 transition-colors duration-300">
                    <span className="text-2xl">{beneficio.icono}</span>
                  </div>
                  <h4 className="text-xl font-medium text-stone-800 mb-3 tracking-wide">
                    {beneficio.titulo}
                  </h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final Premium */}
        <div className="text-center">
          <div className="relative overflow-hidden bg-stone-900 rounded-3xl p-16 lg:p-24 text-white">
            
            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" 
                   style={{backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)', backgroundSize: '50px 50px'}}></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl lg:text-6xl font-light mb-8 tracking-tight leading-tight">
                Transforma tu estilo
                <br />
                <span className="font-medium text-amber-400">hoy mismo</span>
              </h3>
              
              <p className="text-xl font-light text-stone-300 mb-12 leading-relaxed">
                Reserva tu cita y descubre por qué somos la elección preferida para quienes buscan excelencia en belleza
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => handleAgendarPromocion("Experiencia Completa Femenina")}
                  className="px-10 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Experiencia Femenina
                </button>
                
                <button
                  onClick={() => handleAgendarPromocion("Experiencia Completa Masculina")}
                  className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Experiencia Masculina
                </button>
              </div>
              
              <div className="mt-8 text-sm text-stone-400 font-light">
                * Promoción válida por tiempo limitado
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}