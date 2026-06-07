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

  // Confetti particles with football theme colors
  const confettiColors = ['#FFCD00', '#003087', '#C60C30'] // Colombia colors
  const confettiCount = isMobile ? 15 : 30

  const confettiParticles = Array.from({ length: confettiCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }))

  return (
    <motion.div
      className="promotion-banner"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Confetti Background */}
      {confettiParticles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.6
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container">
        <div className="promotion-banner-content">
          <div className="promotion-banner-text">
            <h3>
              ¡Combos Especiales del Mes!
            </h3>
          </div>
          <button
            className="promotion-banner-btn"
            onClick={scrollToPromotions}
          >
            Ver Promociones
            <i className="ti ti-arrow-down" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
