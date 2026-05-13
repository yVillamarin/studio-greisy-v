import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Services() {
  // Número de WhatsApp del negocio (Studio Greisy)
  const businessWhatsApp = '+573117087666'

  const generateWhatsAppMessage = (service) => {
    const message = `🗓️ *SOLICITUD DE CITA* - Studio Greisy ✨

💅 *Servicio:* ${service.title}
💰 *Precio:* ${service.price}

⏰ ¿A qué hora estás disponible para agendar?

━━━━━━━━━━━━━━━━━━
📍 *Studio Greisy - Cejas y Pestañas*
💇‍♀️ ¡Tu belleza es nuestra prioridad!`
    
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${businessWhatsApp}?text=${encodedMessage}`
  }

  const services = [
    {
      id: 1,
      image: '/image/extencion de pestañas.jpeg',
      title: 'Extensiones de pestañas',
      description:
        'Pestañas voluminosas y naturales que realzan tu mirada. Efecto pelo a pelo o volumen ruso.',
      price: 'Desde $85.000',
      icon: 'ti ti-eyeglass'
    },
    {
      id: 2,
      image: '/image/Lifting de Pestañas.jpeg',
      title: 'Lifting de pestañas',
      description:
        'Curva natural y definida que dura hasta 8 semanas. Incluye tinte y nutrición.',
      price: '$80.000',
      icon: 'ti ti-eye'
    },
    {
      id: 3,
      image: '/image/diseño de cejas.jpeg',
      title: 'Diseño de cejas',
      description:
        'Perfilado perfecto según tu rostro. Incluye depilación, tinte y maquillaje.',
      price: '$25.000',
      icon: 'ti ti-brush'
    },
    {
      id: 4,
      image: '/image/Laminado de Cejas.jpeg',
      title: 'Laminado de Cejas',
      description:
        'Cejas alineadas y con volumen natural. Efecto de cejas peinadas por hasta 4 semanas.',
      price: '$80.000',
      icon: 'ti ti-wand'
    }
  ]

  const { ref, animated } = useIntersectionObserver()

  return (
    <section className="section" id="servicios">
      <div className="container">
        <h2 className="section-title">Nuestros servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={index === 0 ? ref : null}
              className={`service-card has-image${animated ? ' animate-in' : ''}`}
              style={{
                opacity: animated ? 1 : 0,
                transform: animated
                  ? 'none'
                  : `translateY(40px) scale(0.95)`,
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div className="service-image shine-effect">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="price">{service.price}</div>
              <a
                href={generateWhatsAppMessage(service)}
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', marginRight: '8px', fill: 'white' }}>
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
                </svg>
                Agendar Cita
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}