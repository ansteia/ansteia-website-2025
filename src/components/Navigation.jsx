import { useState } from 'react';

export default function Navigation() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = {
    en: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      members: 'Members',
    },
    es: {
      services: 'Servicios',
      about: 'Nosotras',
      contact: 'Contacto',
      members: 'Miembros',
    }
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 border-b" style={{backgroundColor: 'rgba(245, 240, 232, 0.95)', borderColor: 'rgba(91, 111, 127, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{height: '120px'}}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/brand/gray logo.png"
              alt="ANSTEIA"
              className="h-32 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="transition-colors text-lg font-medium" style={{color: '#5B6F7F'}} onMouseEnter={(e) => e.target.style.color = '#3A7B7F'} onMouseLeave={(e) => e.target.style.color = '#5B6F7F'}>
              {navItems[language].services}
            </a>
            <a href="#about" className="transition-colors text-lg font-medium" style={{color: '#5B6F7F'}} onMouseEnter={(e) => e.target.style.color = '#3A7B7F'} onMouseLeave={(e) => e.target.style.color = '#5B6F7F'}>
              {navItems[language].about}
            </a>
            <a href="#contact" className="transition-colors text-lg font-medium" style={{color: '#5B6F7F'}} onMouseEnter={(e) => e.target.style.color = '#3A7B7F'} onMouseLeave={(e) => e.target.style.color = '#5B6F7F'}>
              {navItems[language].contact}
            </a>
            <a href="/members" className="transition-colors text-lg font-medium" style={{color: '#5B6F7F'}} onMouseEnter={(e) => e.target.style.color = '#3A7B7F'} onMouseLeave={(e) => e.target.style.color = '#5B6F7F'}>
              {navItems[language].members}
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border transition-colors text-sm font-medium"
              style={{borderColor: 'rgba(91, 111, 127, 0.3)', color: '#5B6F7F'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(91, 111, 127, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {language === 'en' ? '🌐 EN' : '🌐 ES'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-slate-gray hover:text-deep-teal">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
