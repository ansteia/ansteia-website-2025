import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Digital Foundation & Websites',
      titleEs: 'Fundación Digital y Sitios Web',
      icon: '/images/brand/ansteia-circle.png',
      color: '#4FA5A5', // Turquoise
      description: 'Your professional presence, built right',
      descriptionEs: 'Tu presencia profesional, bien construida',
      features: [
        'WordPress websites',
        'Custom web applications',
        'Brand identity & logos',
        'Professional online presence'
      ],
      featuresEs: [
        'Sitios web WordPress',
        'Aplicaciones web personalizadas',
        'Identidad de marca y logos',
        'Presencia profesional en línea'
      ]
    },
    {
      id: 2,
      title: 'Automation & AI Systems',
      titleEs: 'Automatización y Sistemas de IA',
      icon: '/images/brand/ansteia-droplet.png',
      color: '#7B8FA5', // Soft Blue-Gray
      description: 'Get your time back with intelligent workflows',
      descriptionEs: 'Recupera tu tiempo con flujos de trabajo inteligentes',
      features: [
        'Business process automation',
        'Custom AI assistants & GPTs',
        'System integrations',
        'Smart tools & calculators'
      ],
      featuresEs: [
        'Automatización de procesos',
        'Asistentes de IA personalizados',
        'Integraciones de sistemas',
        'Herramientas inteligentes'
      ]
    },
    {
      id: 3,
      title: 'Marketing & Creative Services',
      titleEs: 'Marketing y Servicios Creativos',
      icon: '/images/brand/ansteia-triangle.png',
      color: '#C5A5A5', // Dusty Rose
      description: 'Content and campaigns that connect',
      descriptionEs: 'Contenido y campañas que conectan',
      features: [
        'Social media strategy',
        'Digital advertising campaigns',
        'Video & multimedia content',
        'Creative direction'
      ],
      featuresEs: [
        'Estrategia de redes sociales',
        'Campañas publicitarias digitales',
        'Video y contenido multimedia',
        'Dirección creativa'
      ]
    }
  ];

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden" style={{backgroundColor: '#F5F0E8'}}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{backgroundColor: '#4FA5A5'}}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{backgroundColor: '#C5A5A5'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#5B6F7F'}}>
            How We Help You Grow
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{color: '#5B6F7F', opacity: 0.8}}>
            Three core pillars, one mission: give you freedom
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              style={{
                backgroundColor: hoveredCard === service.id ? service.color : 'white',
                boxShadow: hoveredCard === service.id
                  ? '0 20px 40px rgba(0,0,0,0.15)'
                  : '0 4px 6px rgba(0,0,0,0.05)',
                border: `2px solid ${hoveredCard === service.id ? service.color : 'rgba(91, 111, 127, 0.1)'}`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div
                className="mb-6 transition-transform duration-300 flex justify-center"
                style={{
                  transform: hoveredCard === service.id ? 'scale(1.2)' : 'scale(1)'
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className={
                    service.id === 2 ? "w-32 h-32 object-contain" :
                    service.id === 3 ? "w-28 h-28 object-contain" :
                    "w-24 h-24 object-contain"
                  }
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{
                  color: hoveredCard === service.id ? 'white' : '#5B6F7F'
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-lg mb-6 transition-colors duration-300"
                style={{
                  color: hoveredCard === service.id ? 'rgba(255,255,255,0.9)' : 'rgba(91, 111, 127, 0.7)'
                }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start transition-colors duration-300"
                    style={{
                      color: hoveredCard === service.id ? 'rgba(255,255,255,0.95)' : '#5B6F7F'
                    }}
                  >
                    <span className="mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button
                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: hoveredCard === service.id ? 'white' : service.color,
                  color: hoveredCard === service.id ? service.color : 'white',
                  border: `2px solid ${hoveredCard === service.id ? 'white' : service.color}`
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Who We Serve Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <div
            className="rounded-2xl px-10 py-8 text-center"
            style={{backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}
          >
            <div className="flex justify-center mb-6">
              <img
                src="/images/brand/vesica-piscis.png"
                alt="For Women Entrepreneurs"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{color: '#5B6F7F'}}>
              For Women Entrepreneurs
            </h3>
            <p style={{color: 'rgba(91, 111, 127, 0.8)'}}>
              We're passionate about empowering women-led businesses with the technology and creative support needed to thrive.
            </p>
          </div>

          <div
            className="rounded-2xl px-10 py-8 text-center"
            style={{backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}
          >
            <div className="flex justify-center mb-6">
              <img
                src="/images/brand/small-business.png"
                alt="For Small Businesses"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{color: '#5B6F7F'}}>
              For Small Businesses
            </h3>
            <p style={{color: 'rgba(91, 111, 127, 0.8)'}}>
              Growing businesses need smart systems. We help entrepreneurs scale without losing their minds.
            </p>
          </div>
        </div>

        {/* Why ANSTEIA Section */}
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-center mb-12" style={{color: '#5B6F7F'}}>
            Why ANSTEIA?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌍', title: 'Trilingual Service', desc: 'EN / ES / PT' },
              { icon: '🎨', title: 'Tech + Creative', desc: 'Best of both worlds' },
              { icon: '⏰', title: 'Time-Saving Focus', desc: 'Your freedom matters' },
              { icon: '🤝', title: 'Human + AI', desc: 'Smart collaboration' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl transition-all duration-300 hover:scale-105"
                style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2" style={{color: '#5B6F7F'}}>{item.title}</h4>
                <p className="text-sm" style={{color: 'rgba(91, 111, 127, 0.7)'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#5B6F7F'}}>
            Ready to reclaim your time?
          </h3>
          <a
            href="#contact"
            className="inline-block px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: '#3A7B7F',
              color: 'white',
              boxShadow: '0 4px 20px rgba(58, 123, 127, 0.3)'
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
