import { motion } from 'framer-motion'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section" style={{ background: 'var(--color-light)' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros trabajos
        </motion.h2>
        <motion.p 
          style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Resultados reales de nuestros servicios. ¡Calidad y profesionalismo garantizado!
        </motion.p>
        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(176, 144, 97, 0.3)"
              }}
            >
              <motion.img 
                src={item.image} 
                alt={item.caption} 
                className="gallery-img"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="gallery-caption"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.caption}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}