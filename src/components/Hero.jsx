export default function Hero() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{minHeight: '100vh'}}>
      {/* Background Image - Full coverage */}
      <div
        className="absolute z-0"
        style={{
          backgroundImage: 'url(/images/brand/background.%20png.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-gray/40 via-deep-teal/30 to-slate-gray/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Thoughtfully automated.
          <br />
          Beautifully designed.
        </h1>

        <p className="text-xl sm:text-2xl text-cream mb-10 drop-shadow-md max-w-3xl mx-auto">
          Technology and creativity for entrepreneurs who want their time back
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-turquoise hover:bg-deep-teal text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Book Discovery Call
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-cream/90 hover:bg-cream text-slate-gray font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-cream" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
