import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Bienvenida a tu espacio de belleza
        </motion.h2>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Somos especialistas en realzar tu belleza natural con servicios
            profesionales de pestañas, cejas y productos
            capilares de alta calidad.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Cada servicio está diseñado para que te sientas radiante y segura.
            Trabajamos con técnicas modernas y productos premium para garantizar
            los mejores resultados.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}