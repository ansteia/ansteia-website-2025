import { useState } from 'react';

export default function Members() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Login handler with password check
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Check credentials (all lowercase)
    if (username === 'emprendedora' && password === 'lean-in') {
      setIsLoggedIn(true);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  // Login/Registration Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#000000', paddingTop: '140px'}}>
        <div className="max-w-md w-full">
          <div
            className="rounded-3xl p-8 shadow-2xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(79, 165, 165, 0.3)'
            }}
          >
            {/* Logo */}
            <div className="text-center mb-8">
              <img
                src="/images/brand/ansteia white logo.png"
                alt="ANSTEIA"
                className="h-20 w-auto mx-auto mb-6"
              />
              <h1 className="text-3xl font-bold mb-2" style={{color: '#FFFFFF'}}>
                Sistema Ansteia · Piloto Lean In
              </h1>
              <p style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                Accede a tu espacio privado
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-lg" style={{backgroundColor: 'rgba(255, 100, 100, 0.2)', border: '1px solid rgba(255, 100, 100, 0.5)'}}>
                <p className="text-center text-sm" style={{color: '#FF6B6B'}}>{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#E0E0E0'}}>
                  Usuario
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF'
                  }}
                  placeholder="emprendedora"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#E0E0E0'}}>
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF'
                    }}
                    placeholder="lean-in"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    style={{color: '#4FA5A5'}}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-105"
                style={{backgroundColor: '#4FA5A5', marginTop: '2rem'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard - After Login
  return (
    <div className="min-h-screen" style={{backgroundColor: '#000000', paddingTop: '140px'}}>
      {/* Hero Welcome */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{backgroundColor: '#4FA5A5'}}></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{color: '#FFFFFF'}}>
            Bienvenida. Estás en el lugar correcto.
          </h1>
          <div className="space-y-4 text-xl md:text-2xl" style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8'}}>
            <p>
              Este espacio fue creado para mujeres capaces, inteligentes y en movimiento.
            </p>
            <p>
              Mujeres que saben que pueden tenerlo todo y eligen hacerlo con estructura.
            </p>
            <p>
              Aquí entras para ganar tiempo, claridad y control —no haciendo más, sino organizando mejor.
            </p>
            <p className="text-2xl md:text-3xl font-semibold pt-6" style={{color: '#4FA5A5', fontStyle: 'italic'}}>
              Cuando el sistema trabaja por ti,<br/>
              tú recuperas espacio para hacer lo que amas<br/>
              y amar lo que haces, con foco y elegancia.
            </p>
          </div>
        </div>
      </section>

      {/* Sistema Ansteia - Piloto Lean In */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#FFFFFF'}}>
              Sistema Ansteia · Piloto Lean In
            </h2>
            <p className="text-xl md:text-2xl" style={{color: '#4FA5A5'}}>
              Estructura, tecnología y claridad para mujeres que lideran.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Plan Claridad */}
            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(79, 165, 165, 0.3)'
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2" style={{color: '#4FA5A5'}}>
                  Plan Claridad
                </h3>
                <div className="text-5xl font-bold mb-4" style={{color: '#FFFFFF'}}>
                  $20 USD
                </div>
                <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Pago único</p>
              </div>

              <p className="text-lg mb-6 text-center" style={{color: '#FFFFFF'}}>
                Orden y visibilidad total de tu negocio.
              </p>

              <ul className="space-y-3 mb-8" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Aplicación interna (base de datos)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Clientes, pedidos o inscripciones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Control de gastos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Dashboard de ingresos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Sistema de feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Videos de capacitación</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Grupo de soporte</span>
                </li>
              </ul>

              <button
                className="w-full py-4 rounded-lg font-bold text-white transition-all"
                style={{backgroundColor: '#4FA5A5'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
              >
                Comprar Plan Claridad
              </button>
            </div>

            {/* Plan Automatización */}
            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:scale-105 relative"
              style={{
                backgroundColor: 'rgba(79, 165, 165, 0.1)',
                border: '3px solid #4FA5A5'
              }}
            >
              <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold"
                style={{backgroundColor: '#4FA5A5', color: '#FFFFFF'}}
              >
                MÁS POPULAR
              </div>

              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2" style={{color: '#4FA5A5'}}>
                  Plan Automatización
                </h3>
                <div className="text-5xl font-bold mb-4" style={{color: '#FFFFFF'}}>
                  $70 USD
                </div>
                <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Pago único</p>
              </div>

              <p className="text-lg mb-6 text-center" style={{color: '#FFFFFF'}}>
                Automatiza pedidos, pagos y seguimiento.
              </p>

              <ul className="space-y-3 mb-8" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Todo Plan Claridad</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Formularios automáticos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Gestión de pagos por QR</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Emails y recordatorios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Feedback avanzado</span>
                </li>
              </ul>

              <button
                className="w-full py-4 rounded-lg font-bold text-white transition-all"
                style={{backgroundColor: '#4FA5A5'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
              >
                Comprar Plan Automatización
              </button>
            </div>

            {/* Plan WhatsApp Total */}
            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(232, 197, 213, 0.3)'
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2" style={{color: '#E8C5D5'}}>
                  Plan WhatsApp Total
                </h3>
                <div className="text-5xl font-bold mb-4" style={{color: '#FFFFFF'}}>
                  $150 USD
                </div>
                <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Pago único</p>
              </div>

              <p className="text-lg mb-6 text-center" style={{color: '#FFFFFF'}}>
                Automatización completa vía WhatsApp.
              </p>

              <ul className="space-y-3 mb-8" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Todo lo anterior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Flujos completos por WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Integraciones personalizadas</span>
                </li>
              </ul>

              <button
                className="w-full py-4 rounded-lg font-bold transition-all"
                style={{backgroundColor: '#E8C5D5', color: '#000000'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#D5B5C5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#E8C5D5'}
              >
                Solicitar acceso
              </button>
            </div>
          </div>

          {/* Workshop Section */}
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              backgroundColor: 'rgba(79, 165, 165, 0.1)',
              border: '2px solid #4FA5A5'
            }}
          >
            <h3 className="text-4xl font-bold mb-6" style={{color: '#FFFFFF'}}>
              Workshop · Sistema Ansteia · Piloto Lean In
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8'}}>
              Un encuentro práctico donde aprenderás a usar el sistema,
              organizar tu negocio con claridad
              y activar la tecnología como aliada.
            </p>
            <p className="text-lg mb-8" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
              Este workshop es parte del piloto inicial y define la base del sistema.
            </p>
            <button
              className="px-10 py-5 rounded-lg font-bold text-xl text-white transition-all transform hover:scale-105"
              style={{backgroundColor: '#4FA5A5'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
            >
              Inscribirme al workshop
            </button>
          </div>
        </div>
      </section>

      {/* Microcopy Footer */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px'}}>
            Avanza con foco · El sistema trabaja por ti · Estructura primero, esfuerzo después
          </p>
          <p className="text-lg font-semibold" style={{color: '#4FA5A5'}}>
            Puedes tenerlo todo, con orden
          </p>
        </div>
      </section>
    </div>
  );
}
