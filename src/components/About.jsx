export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden" style={{backgroundColor: '#000000'}}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{backgroundColor: '#4FA5A5'}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{backgroundColor: '#E8C5D5'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#FFFFFF'}}>
            About Us
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{color: '#E0E0E0', opacity: 0.8}}>
            Meet the minds behind ANSTEIA
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-24">
          {/* Adriana Mendivil */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="order-2 md:order-1">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid rgba(197, 165, 165, 0.3)',
                  aspectRatio: '3/4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="text-center p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4"
                    style={{color: 'rgba(197, 165, 165, 0.5)'}}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Adriana Mendivil profile photo placeholder"
                    role="img"
                  >
                    <title>Adriana Mendivil - Founder of ANSTEIA</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px'}}>
                    Photo placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold mb-3" style={{color: '#FFFFFF'}}>
                Adriana Mendivil
              </h3>
              <p className="text-xl mb-6" style={{color: '#C5A5A5'}}>
                Founder
              </p>
              <div className="space-y-4" style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8'}}>
                <p>
                  Adriana Mendivil is the founder of Ansteia, a global creative and AI-driven studio focused on building intelligent systems that restore clarity, time, and operational elegance.
                </p>
                <p>
                  With a formal background in law, Adriana began her career specialising in contracts and legal structures, developing a sharp understanding of risk, governance, and systems that endure. That legal foundation continues to shape her work today: precise, ethical, and designed for long-term resilience rather than short-term fixes.
                </p>
                <p>
                  Alongside her legal career, Adriana spent over a decade building and managing photographic and fine art studios across Bolivia, Brazil, and Australia. Working internationally refined her ability to translate strategy, aesthetics, and human behaviour across cultures—experience that now informs how she designs digital ecosystems for modern businesses.
                </p>
                <p>
                  Today, Adriana works at the intersection of AI, automation, visual design, and systems thinking. Through Ansteia, she designs elegant websites, operational databases, automated workflows, and custom AI agents that reduce cognitive overload and allow founders and teams to operate with greater focus and autonomy.
                </p>
                <p style={{fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)'}}>
                  Ansteia exists from a clear belief: that it is possible to build powerful, intelligent systems—and still live a grounded, fully human life.
                </p>
              </div>
            </div>
          </div>

          {/* Nicole Coelho */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="order-2">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid rgba(232, 197, 213, 0.3)',
                  aspectRatio: '3/4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="text-center p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4"
                    style={{color: 'rgba(232, 197, 213, 0.5)'}}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Nicole Coelho profile photo placeholder"
                    role="img"
                  >
                    <title>Nicole Coelho - Co-Founder & Brand Architect at ANSTEIA</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px'}}>
                    Photo placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="order-1">
              <h3 className="text-4xl font-bold mb-3" style={{color: '#FFFFFF'}}>
                Nicole Coelho
              </h3>
              <p className="text-xl mb-6" style={{color: '#E8C5D5'}}>
                Co-Founder & Brand Architect
              </p>
              <div className="space-y-4" style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8'}}>
                <p>
                  Nicole Coelho is a co-founder of Ansteia and leads brand design, visual identity, and digital visibility strategy. She specialises in shaping brands that are not only visually distinctive, but strategically positioned to perform across social platforms, advertising, and modern digital ecosystems.
                </p>
                <p>
                  With a sharp eye for design and an advanced understanding of social media dynamics, Nicole translates brand essence into cohesive visual systems that scale across content, campaigns, and platforms. Her work spans brand identity, social media architecture, advertising design, and platform-specific strategy, ensuring that brands communicate with clarity, consistency, and impact.
                </p>
                <p>
                  Nicole also designs and builds AI-powered tools and bots that support content creation, scheduling, and social media management, helping founders and teams maintain presence without burnout. Alongside this, she teaches practical social media skills, empowering clients to understand and own their digital voice rather than depend on constant outsourcing.
                </p>
                <p style={{fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)'}}>
                  At Ansteia, Nicole ensures that intelligence is not only functional—but visible, legible, and compelling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-32">
          <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#FFFFFF'}}>
            Want to work with us?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
            We'd love to hear about your project and explore how we can help you build systems that work for you.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: '#4FA5A5',
              color: 'white',
              boxShadow: '0 4px 20px rgba(79, 165, 165, 0.3)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
