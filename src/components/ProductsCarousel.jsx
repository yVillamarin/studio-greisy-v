import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import products from '../data/products'

const PRODUCTS_PER_VIEW = {
  desktop: 3,
  tablet: 2,
  mobile: 1
}

function getProductsPerView() {
  if (window.innerWidth <= 768) return PRODUCTS_PER_VIEW.mobile
  if (window.innerWidth <= 1024) return PRODUCTS_PER_VIEW.tablet
  return PRODUCTS_PER_VIEW.desktop
}

export default function ProductsCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [perView, setPerView] = useState(getProductsPerView)
  const [selectedImage, setSelectedImage] = useState(null)

  const totalPages = Math.ceil(products.length / perView)

  useEffect(() => {
    const handleResize = () => {
      const newPerView = getProductsPerView()
      if (newPerView !== perView) {
        setPerView(newPerView)
        setCurrentPage(0)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [perView])

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const newPage = prev + 1
        if (newPage >= totalPages) return 0
        return newPage
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [totalPages])

  const moveCarousel = useCallback(
    (direction) => {
      setCurrentPage((prev) => {
        const newPage = prev + direction
        if (newPage < 0) return totalPages - 1
        if (newPage >= totalPages) return 0
        return newPage
      })
    },
    [totalPages]
  )

  const goToSlide = useCallback((index) => {
    setCurrentPage(index)
  }, [])

  const offset = -currentPage * 100

  return (
    <section className="products-section" id="productos">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Productos capilares
        </motion.h2>
        <div className="products-carousel-container">
          <motion.button
            className="products-carousel-arrow prev"
            onClick={() => moveCarousel(-1)}
            aria-label="Anterior"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(176, 144, 97, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ti ti-chevron-left" />
          </motion.button>

          <motion.div 
            className="products-carousel-track" 
            style={{ transform: `translateX(${offset}%)` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="product-slide" 
                style={{ flex: `0 0 ${100 / perView}%` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <motion.div 
                  className="product-card"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 12px 30px rgba(176, 144, 97, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="product-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      onClick={() => setSelectedImage(product.image)}
                      style={{ cursor: 'pointer' }}
                    />
                  </motion.div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <motion.a
                      href={`https://wa.me/573117087666?text=Hola!%20Quiero%20comprar%20el%20${encodeURIComponent(product.name)}`}
                      className="product-order-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Hacer pedido
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="products-carousel-arrow next"
            onClick={() => moveCarousel(1)}
            aria-label="Siguiente"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(176, 144, 97, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ti ti-chevron-right" />
          </motion.button>
        </div>

        <div className="products-carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              className={`products-carousel-dot${index === currentPage ? ' active' : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
            />
          ))}
        </div>
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