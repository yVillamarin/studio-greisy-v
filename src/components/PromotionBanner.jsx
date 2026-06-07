import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PromotionBanner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToPromotions = () => {
    const promotionsSection = document.getElementById('promociones')
    if (promotionsSection) {
      promotionsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const bannerAnimation = isMobile
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, ease: "easeOut" } }

  const titleAnimation = isMobile
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2, duration: 0.4 } }
    : { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.4, duration: 0.6 } }

  const buttonAnimation = isMobile
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.4 } }
    : { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.6, duration: 0.5 } }

  const hoverEffect = isMobile ? {} : { whileHover: { scale: 1.02 }, transition: { duration: 0.3 } }
  const buttonHover = isMobile ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
  const iconAnimation = isMobile
    ? { animate: { y: [0, 3, 0] }, transition: { duration: 1.5, repeat: Infinity } }
    : { animate: { y: [0, 5, 0] }, transition: { duration: 1.5, repeat: Infinity } }

  return (
    <motion.div
      className="promotion-banner"
      {...bannerAnimation}
    >
      <div className="container">
        <motion.div
          className="promotion-banner-content"
          {...hoverEffect}
        >
          <div className="promotion-banner-text">
            <motion.h3
              {...titleAnimation}
            >
              ¡Combos Especiales del Mes!
            </motion.h3>
          </div>
          <motion.button
            className="promotion-banner-btn"
            onClick={scrollToPromotions}
            {...buttonAnimation}
            {...buttonHover}
          >
            Ver Promociones
            <motion.i
              className="ti ti-arrow-down"
              {...iconAnimation}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
