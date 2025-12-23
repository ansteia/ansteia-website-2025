import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // For now, we'll use a mailto link as a simple solution
    // Later we can integrate with a service like Formspree or EmailJS
    const mailtoLink = `mailto:ansteiadigital@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus('sent');

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('');
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/brand/ansteia-extended-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Beautiful overlay for readability */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(245, 240, 232, 0.95) 0%, rgba(245, 240, 232, 0.92) 50%, rgba(197, 165, 165, 0.15) 100%)'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: '#5B6F7F'}}>
            Let's Work Together
          </h2>
          <p className="text-xl" style={{color: '#5B6F7F', opacity: 0.8}}>
            Ready to reclaim your time? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-3xl shadow-2xl p-8 backdrop-blur-sm" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(197, 165, 165, 0.2)'
          }}>
            <h3 className="text-2xl font-bold mb-6" style={{color: '#5B6F7F'}}>
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{color: '#5B6F7F'}}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-turquoise transition-colors"
                  style={{borderColor: '#B5C5B5'}}
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{color: '#5B6F7F'}}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-turquoise transition-colors"
                  style={{borderColor: '#B5C5B5'}}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{color: '#5B6F7F'}}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-turquoise transition-colors"
                  style={{borderColor: '#B5C5B5'}}
                  placeholder="Discovery Call Request"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{color: '#5B6F7F'}}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-turquoise transition-colors resize-none"
                  style={{borderColor: '#B5C5B5'}}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
                style={{backgroundColor: '#4FA5A5'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{color: '#5B6F7F'}}>
                Direct Contact
              </h3>
              <p className="mb-8" style={{color: '#5B6F7F', opacity: 0.8}}>
                Prefer to reach out directly? Choose your preferred method below.
              </p>
            </div>

            {/* Email Contacts */}
            <div className="space-y-4">
              <div className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(197, 165, 165, 0.3)'
              }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#C5A5A5'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{color: '#5B6F7F'}}>Adriana</h4>
                    <a href="mailto:adriana@ansteia.com" className="hover:underline" style={{color: '#4FA5A5'}}>
                      adriana@ansteia.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(232, 197, 213, 0.4)'
              }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#E8C5D5'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{color: '#5B6F7F'}}>Nicole</h4>
                    <a href="mailto:nicole@ansteia.com" className="hover:underline" style={{color: '#4FA5A5'}}>
                      nicole@ansteia.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(79, 165, 165, 0.3)'
              }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#4FA5A5'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{color: '#5B6F7F'}}>General Inquiries</h4>
                    <a href="mailto:info@ansteia.com" className="hover:underline" style={{color: '#4FA5A5'}}>
                      info@ansteia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl p-6 backdrop-blur-sm shadow-lg" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              border: '2px solid rgba(181, 197, 181, 0.5)'
            }}>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#4FA5A5'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold mb-2" style={{color: '#5B6F7F'}}>Response Time</h4>
                  <p className="text-sm" style={{color: '#5B6F7F', opacity: 0.7}}>
                    We typically respond within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
