import { motion } from 'framer-motion'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <motion.div 
          className="benefits"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="benefit-item"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05
              }}
            >
              <motion.i 
                className={benefit.icon}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}