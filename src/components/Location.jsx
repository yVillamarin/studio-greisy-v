export default function Location() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.890123456789!2d-75.7066183!3d4.8199385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388756c1839795%3A0x683463039a46a211!2sGreisy%20Villada!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco";
  const mapLink = "https://www.google.com/maps/place/Greisy+Villada/@4.8199385,-75.7066183,868m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e388756c1839795:0x683463039a46a211!8m2!3d4.8199385!4d-75.7066183!16s%2Fg%2F11nj469jh5?hl=es-CO&entry=ttu";

  return (
    <section className="location-section">
      <div className="container">
        <h2 className="section-title">Encuéntranos</h2>
        <div className="location-content">
          <div className="location-info">
            <div className="location-item">
              <i className="ti ti-map-pin"></i>
              <div>
                <h3>Dirección</h3>
                <p>Pereira, Risaralda - Colombia</p>
              </div>
            </div>
            <div className="location-item">
              <i className="ti ti-clock"></i>
              <div>
                <h3>Horario de atención</h3>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábado: 9:00 AM - 4:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
            <div className="location-item">
              <i className="ti ti-phone"></i>
              <div>
                <h3>Contacto</h3>
                <p>+57 311 708 7666</p>
              </div>
            </div>
            <a
              href={mapLink}
              className="location-map-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-external-link"></i>
              Abrir en Google Maps
            </a>
          </div>
          <div className="location-map">
            <iframe
              src={mapUrl}
              title="Ubicación Studio Greisy"
              className="location-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
