import { motion } from 'framer-motion'

export default function Location() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.890123456789!2d-75.7066183!3d4.8199385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388756c1839795%3A0x683463039a46a211!2sGreisy%20Villada!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco";
  const mapLink = "https://www.google.com/maps/place/Greisy+Villada/@4.8199385,-75.7066183,868m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e388756c1839795:0x683463039a46a211!8m2!3d4.8199385!4d-75.7066183!16s%2Fg%2F11nj469jh5?hl=es-CO&entry=ttu";

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="location-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Encuéntranos
        </motion.h2>
        <div className="location-content">
          <motion.div 
            className="location-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div 
              className="location-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <motion.i 
                className="ti ti-map-pin"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <div>
                <h3>Dirección</h3>
                <p>Pereira, Risaralda - Colombia</p>
              </div>
            </motion.div>
            <motion.div 
              className="location-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <motion.i 
                className="ti ti-clock"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <div>
                <h3>Horario de atención</h3>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábado: 9:00 AM - 4:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </motion.div>
            <motion.div 
              className="location-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <motion.i 
                className="ti ti-phone"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <div>
                <h3>Contacto</h3>
                <p>+57 311 708 7666</p>
              </div>
            </motion.div>
            <motion.a
              href={mapLink}
              className="location-map-btn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ti ti-external-link"></i>
              Abrir en Google Maps
            </motion.a>
          </motion.div>
          <motion.div 
            className="location-map"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <iframe
              src={mapUrl}
              title="Ubicación Studio Greisy"
              className="location-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
