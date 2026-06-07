import { motion } from 'framer-motion'

export default function PromotionBanner() {
  const scrollToPromotions = () => {
    const promotionsSection = document.getElementById('promociones')
    if (promotionsSection) {
      promotionsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="promotion-banner"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div
          className="promotion-banner-content"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="promotion-banner-text">
           
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              ¡Combos Especiales del Mes!
            </motion.h3>
           
          </div>
          <motion.button
            className="promotion-banner-btn"
            onClick={scrollToPromotions}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Promociones
            <motion.i
              className="ti ti-arrow-down"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
