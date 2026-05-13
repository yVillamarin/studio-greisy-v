import { useState } from 'react'
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

  return (
    <section className="section" id="promociones">
      <div className="container">
        <h2 className="section-title">Promociones y Paquetes</h2>
        <div className="promotions-grid">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`promo-card${promo.badge ? ' featured' : ''}`}
            >
              {promo.badge && (
                <div className="promo-badge">{promo.badge}</div>
              )}
              <div className="promo-card-image">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  onClick={() => setSelectedImage(promo.image)}
                />
              </div>
              <div className="promo-card-body">
                <h3>{promo.title}</h3>
                <a
                  href={`https://wa.me/573117087666?text=Hola!%20Quiero%20Comprar%20el%20${promo.title}%20Especial%20de%20las%20madres`}
                  className="promo-order-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hacer pedido
                </a>
              </div>
            </div>
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