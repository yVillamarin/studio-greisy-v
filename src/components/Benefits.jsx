export default function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: 'ti ti-certificate',
      title: 'Profesionales certificadas',
      description: 'Equipo capacitado con las últimas técnicas del mercado'
    },
    {
      id: 2,
      icon: 'ti ti-shield-check',
      title: 'Productos de calidad',
      description: 'Trabajamos solo con marcas reconocidas y seguras'
    },
    {
      id: 3,
      icon: 'ti ti-clock',
      title: 'Atención personalizada',
      description: 'Agenda flexible y atención dedicada a cada cliente'
    },
    {
      id: 4,
      icon: 'ti ti-star',
      title: 'Resultados garantizados',
      description: 'Satisfacción de nuestras clientas como prioridad'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="benefits">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <i className={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}