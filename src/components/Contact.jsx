export default function Contact() {
  const socialButtons = [
    {
      id: 1,
      icon: 'fab fa-whatsapp',
      className: 'btn-whatsapp',
      href: 'https://wa.me/573117087666?text=Hola!%20Quiero%20agendar%20una%20cita%20en%20Studio%20Greisy'
    },
    {
      id: 2,
      icon: 'fab fa-instagram',
      className: 'btn-instagram',
      href: 'https://instagram.com/STUDIOGREISYV'
    },
    {
      id: 3,
      icon: 'fab fa-facebook-f',
      className: 'btn-facebook',
      href: 'https://www.facebook.com/share/18g2ZgYNaV/?mibextid=wwXIfr'
    }
  ]

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">¡Agenda tu cita ahora!</h2>
        <p style={{ textAlign: 'center', fontSize: '1.05rem', marginBottom: '2rem', color: '#555' }}>
          Estamos aquí para consentirte. Contáctanos por tu canal favorito:
        </p>
        <div className="contact-buttons social-icons-row">
          {socialButtons.map((btn) => (
            <a
              key={btn.id}
              href={btn.href}
              className={`social-btn ${btn.className}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={btn.icon.replace('fab fa-', '').replace('ti ti-', '')}
            >
              <i className={btn.icon} />
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href="https://wa.me/573117087666?text=Hola!%20Quiero%20agendar%20una%20cita%20en%20Studio%20Greisy"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar cita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}