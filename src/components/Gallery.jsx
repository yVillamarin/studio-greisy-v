export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "/image/WhatsApp Image 2026-05-08 at 10.38.04 PM.jpeg",
      caption: "Extensiones de pestañas - Volumen ruso"
    },
    {
      id: 2,
      image: "/image/WhatsApp Image 2026-05-08 at 10.38.49 PM (1).jpeg",
      caption: "Diseño de cejas - Perfilado perfecto"
    },
    {
      id: 3,
      image: "/image/WhatsApp Image 2026-05-08 at 10.38.49 PM.jpeg",
      caption: "Lifting de pestañas - Efecto natural"
    },
    {
      id: 4,
      image: "/image/WhatsApp Image 2026-05-13 at 11.02.24 AM (1).jpeg",
      caption: "Laminado de cejas - Cejas peinadas"
    },
    {
      id: 5,
      image: "/image/WhatsApp Image 2026-05-13 at 11.02.24 AM.jpeg",
      caption: "Microblading - Técnica pelo a pelo"
    },
    {
      id: 6,
      image: "/image/WhatsApp Image 2026-05-13 at 11.02.25 AM.jpeg",
      caption: "Combo cejas + pestañas - Look completo"
    }
  ]

  return (
    <section className="section" style={{ background: 'var(--color-light)' }}>
      <div className="container">
        <h2 className="section-title">Nuestros trabajos</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          Resultados reales de nuestros servicios. ¡Calidad y profesionalismo garantizado!
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.caption} className="gallery-img" />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}