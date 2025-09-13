'use client';

export default function Contacto() {
  const handleAgendarCita = () => {
    window.open('https://wa.me/1234567890?text=Hola, quiero agendar una cita en Bella Siluette', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hola, tengo una consulta sobre Bella Siluette', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/bellasiluette', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://facebook.com/bellasiluette', '_blank');
  };

  const handleGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Bella+Siluette+Salon', '_blank');
  };

  const contactInfo = [
    {
      title: 'Ubicación',
      content: 'Av. Principal 123, Centro\nCiudad, País',
      action: handleGoogleMaps,
      actionText: 'Ver en Google Maps'
    },
    {
      title: 'Horarios de Atención',
      content: 'Lunes - Viernes: 9:00 AM - 7:00 PM\nSábados: 9:00 AM - 5:00 PM\nDomingos: 10:00 AM - 3:00 PM'
    },
    {
      title: 'Contacto Directo',
      content: '+1 (555) 123-4567\ninfo@bellasiluette.com',
      action: handleWhatsApp,
      actionText: 'Contactar por WhatsApp'
    }
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      action: handleWhatsApp,
      color: 'bg-green-600 hover:bg-green-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      action: handleInstagram,
      color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      action: handleFacebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contacto" className="py-32 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center px-4 py-2 bg-stone-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
            <span className="text-stone-600 text-sm font-medium tracking-widest uppercase">Agenda Tu Visita</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-light text-stone-800 mb-8 tracking-tight">
            Contacto &
            <br />
            <span className="font-medium text-amber-600">Reservas</span>
          </h2>
          
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Estamos aquí para ayudarte a descubrir tu mejor versión. Agenda tu consulta personalizada y comienza tu transformación
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Información de Contacto */}
          <div className="space-y-12">
            
            {/* Información principal */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-stone-100 hover:border-stone-200">
                    <h3 className="text-xl font-medium text-stone-800 mb-4 tracking-wide">
                      {info.title}
                    </h3>
                    <div className="text-stone-600 leading-relaxed mb-6 whitespace-pre-line font-light">
                      {info.content}
                    </div>
                    {info.action && (
                      <button
                        onClick={info.action}
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium tracking-wide transition-colors duration-300 group"
                      >
                        <span className="mr-2">{info.actionText}</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-3xl p-8 border border-stone-100">
              <h3 className="text-xl font-medium text-stone-800 mb-8 text-center tracking-wide">
                Síguenos en Redes Sociales
              </h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={social.action}
                    className={`p-4 rounded-2xl text-white transition-all duration-300 hover:shadow-xl hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-12 text-white">
              
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-amber-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3a4 4 0 118 0v4m-4 8.5h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-light mb-6 tracking-tight">
                  Reserva tu
                  <br />
                  <span className="font-medium text-amber-400">experiencia</span>
                </h3>
                
                <p className="text-lg font-light text-stone-300 mb-10 leading-relaxed">
                  Agenda tu cita y descubre por qué somos la elección preferida para transformaciones de belleza excepcionales
                </p>
                
                <button
                  onClick={handleAgendarCita}
                  className="w-full px-8 py-5 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-medium tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg mb-8"
                >
                  Agendar Mi Cita Ahora
                </button>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-light text-amber-400 mb-2">50%</div>
                    <div className="text-sm text-stone-300 font-light">Descuento Especial</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-light text-amber-400 mb-2">24h</div>
                    <div className="text-sm text-stone-300 font-light">Confirmación</div>
                  </div>
                </div>

                {/* Beneficios */}
                <div className="space-y-4 text-left">
                  {[
                    'Confirmación automática por WhatsApp',
                    'Recordatorio 24 horas antes',
                    'Cancelación gratuita hasta 2 horas antes',
                    'Consulta personalizada gratuita'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                      <span className="text-stone-300 font-light text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer integrado */}
        <div className="mt-32 pt-16 border-t border-stone-200">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl font-light tracking-wider mb-4">
                <span className="text-stone-800">Bella</span>
                <span className="font-medium text-amber-600 ml-2">Siluette</span>
              </h1>
              <p className="text-stone-600 font-light">
                Descubre tu mejor versión
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-stone-500 font-light">
              <p>© 2024 Bella Siluette. Todos los derechos reservados.</p>
              <div className="flex items-center gap-6">
                <span>Política de Privacidad</span>
                <span>•</span>
                <span>Términos de Servicio</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}