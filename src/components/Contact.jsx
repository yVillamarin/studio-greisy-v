import { motion } from 'framer-motion'

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
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
    <section className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¡Agenda tu cita ahora!
        </motion.h2>
        <motion.p 
          style={{ textAlign: 'center', fontSize: '1.05rem', marginBottom: '2rem', color: '#555' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Estamos aquí para consentirte. Contáctanos por tu canal favorito:
        </motion.p>
        <motion.div 
          className="contact-buttons social-icons-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {socialButtons.map((btn) => (
            <motion.a
              key={btn.id}
              href={btn.href}
              className={`social-btn ${btn.className}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={btn.icon.replace('fab fa-', '').replace('ti ti-', '')}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.1
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.i 
                className={btn.icon}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
        <motion.div 
          style={{ textAlign: 'center', marginTop: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="https://wa.me/573117087666?text=Hola!%20Quiero%20agendar%20una%20cita%20en%20Studio%20Greisy"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar cita por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}