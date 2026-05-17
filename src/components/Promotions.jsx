import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useCarousel from '../hooks/useCarousel'

export default function Promotions() {
  const [selectedImage, setSelectedImage] = useState(null)
  const promotions = [
    {
      id: 1,
      image: '/image/WhatsApp Image 2026-05-13 at 11.04.20 AM (1).jpeg',
      title: 'Combo 1',
      badge: null
    },
    {
      id: 2,
      image: '/image/WhatsApp Image 2026-05-13 at 11.04.20 AM (2).jpeg',
      title: 'Combo 2',
      badge: null
    },
    {
      id: 3,
      image: '/image/WhatsApp Image 2026-05-13 at 11.04.20 AM (3).jpeg',
      title: 'Combo 3',
      badge: null
    },
    {
      id: 4,
      image: '/image/WhatsApp Image 2026-05-13 at 11.04.20 AM.jpeg',
      title: 'Combo 4',
      badge: null
    },
    {
      id: 5,
      image: '/image/WhatsApp Image 2026-05-13 at 11.04.20 AM (4).jpeg',
      title: 'Combo 5',
      badge: null
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
    <section className="section" id="promociones">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Promociones y Paquetes
        </motion.h2>
        <motion.div 
          className="promotions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {promotions.map((promo) => (
            <motion.div
              key={promo.id}
              className={`promo-card${promo.badge ? ' featured' : ''}`}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 12px 30px rgba(176, 144, 97, 0.3)"
              }}
            >
              {promo.badge && (
                <motion.div 
                  className="promo-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  {promo.badge}
                </motion.div>
              )}
              <motion.div 
                className="promo-card-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={promo.image} 
                  alt={promo.title} 
                  onClick={() => setSelectedImage(promo.image)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{ cursor: 'pointer' }}
                />
              </motion.div>
              <div className="promo-card-body">
                <h3>{promo.title}</h3>
                <motion.a
                  href={`https://wa.me/573117087666?text=Hola!%20Quiero%20Comprar%20el%20${promo.title}%20Especial%20de%20las%20madres`}
                  className="promo-order-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hacer pedido
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal-overlay" 
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="image-modal-close" 
              onClick={() => setSelectedImage(null)}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              ×
            </motion.button>
            <motion.img 
              src={selectedImage} 
              alt="Imagen completa" 
              className="image-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}