import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function About() {
  const { ref: titleRef, animated: titleAnimated } = useIntersectionObserver()
  const { ref: descRef, animated: descAnimated } = useIntersectionObserver()

  return (
    <section className="about-section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title ${titleAnimated ? 'animate-in' : ''}`}
          style={{ opacity: titleAnimated ? 1 : 0, transform: titleAnimated ? 'none' : 'translateY(30px)' }}
        >
          Bienvenida a tu espacio de belleza
        </h2>
        <div className="about-content">
          <p
            ref={descRef}
            style={{ opacity: descAnimated ? 1 : 0, transform: descAnimated ? 'none' : 'translateY(30px)', transition: 'all 0.6s ease' }}
          >
            Somos especialistas en realzar tu belleza natural con servicios
            profesionales de pestañas, cejas, definiciones faciales y productos
            capilares de alta calidad.
          </p>
          <p
            style={{ opacity: descAnimated ? 1 : 0, transform: descAnimated ? 'none' : 'translateY(30px)', transition: 'all 0.6s ease 0.15s' }}
          >
            Cada servicio está diseñado para que te sientas radiante y segura.
            Trabajamos con técnicas modernas y productos premium para garantizar
            los mejores resultados.
          </p>
        </div>
      </div>
    </section>
  )
}