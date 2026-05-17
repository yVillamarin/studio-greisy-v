import { useState, useEffect, useCallback } from 'react'
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
        <h2 className="section-title">Productos capilares</h2>
        <div className="products-carousel-container">
          <button
            className="products-carousel-arrow prev"
            onClick={() => moveCarousel(-1)}
            aria-label="Anterior"
          >
            <i className="ti ti-chevron-left" />
          </button>

          <div className="products-carousel-track" style={{ transform: `translateX(${offset}%)` }}>
            {products.map((product, index) => (
              <div key={product.id} className="product-slide" style={{ flex: `0 0 ${100 / perView}%` }}>
                <div className="product-card">
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      onClick={() => setSelectedImage(product.image)}
                    />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <a
                      href={`https://wa.me/573117087666?text=Hola!%20Quiero%20comprar%20el%20${encodeURIComponent(product.name)}`}
                      className="product-order-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hacer pedido
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="products-carousel-arrow next"
            onClick={() => moveCarousel(1)}
            aria-label="Siguiente"
          >
            <i className="ti ti-chevron-right" />
          </button>
        </div>

        <div className="products-carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`products-carousel-dot${index === currentPage ? ' active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="image-modal-overlay" 
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="image-modal-close" 
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Imagen completa" 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}