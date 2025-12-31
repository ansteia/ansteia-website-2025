export default function Hero() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{minHeight: '100vh', width: '100%', backgroundColor: '#000000'}}>
      {/* Background Image - Full coverage with dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/brand/ansteia-banner-16x9.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for dark theme */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Thoughtfully automated.
          <br />
          Beautifully designed.
        </h1>

        <p className="text-xl sm:text-2xl mb-10 drop-shadow-md max-w-3xl mx-auto" style={{color: '#E0E0E0'}}>
          Technology and creativity for entrepreneurs who want their time back
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
            style={{backgroundColor: '#4FA5A5', color: '#FFFFFF'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
          >
            Book Discovery Call
          </a>
          <a
            href="#services"
            className="px-8 py-4 font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', border: '2px solid rgba(255, 255, 255, 0.3)'}}
            onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6" style={{color: '#FFFFFF'}} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
