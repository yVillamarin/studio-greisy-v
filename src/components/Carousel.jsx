import { motion, AnimatePresence } from 'framer-motion'
import useCarousel from '../hooks/useCarousel'
import slides from '../data/carousel'
import { smoothScroll } from '../utils/helpers'

export default function Carousel() {
  const { currentSlide, goToSlide, moveCarousel } = useCarousel(slides.length, 5000)

  return (
    <div className="carousel-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="carousel-slides"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="carousel-slide">
            <img
              src={slides[currentSlide].bgImage}
              alt={slides[currentSlide].title}
              className="carousel-slide-bg"
            />
            <div className="carousel-overlay">
              <motion.div 
                className="carousel-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {slides[currentSlide].logo && (
                  <motion.img
                    src={slides[currentSlide].logo}
                    alt="Studio Greisy Logo"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      marginBottom: '1.5rem',
                      objectFit: 'cover'
                    }}
                  />
                )}
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.a
                  href={slides[currentSlide].ctaHref}
                  className="carousel-cta"
                  onClick={smoothScroll}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].ctaText}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        className="carousel-arrow prev"
        onClick={() => moveCarousel(-1)}
        aria-label="Anterior"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)" }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ti ti-chevron-left" />
      </motion.button>
      <motion.button
        className="carousel-arrow next"
        onClick={() => moveCarousel(1)}
        aria-label="Siguiente"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)" }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ti ti-chevron-right" />
      </motion.button>

      <div className="carousel-nav">
        {slides.map((_, index) => (
          <motion.span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  )
}