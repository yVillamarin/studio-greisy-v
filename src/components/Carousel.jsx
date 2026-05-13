import useCarousel from '../hooks/useCarousel'
import slides from '../data/carousel'
import { smoothScroll } from '../utils/helpers'

export default function Carousel() {
  const { currentSlide, goToSlide, moveCarousel } = useCarousel(slides.length, 5000)

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="carousel-overlay">
              <div className="carousel-content">
                {slide.logo && (
                  <img
                    src={slide.logo}
                    alt="Studio Greisy Logo"
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
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <a
                  href={slide.ctaHref}
                  className="carousel-cta"
                  onClick={smoothScroll}
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-arrow prev"
        onClick={() => moveCarousel(-1)}
        aria-label="Anterior"
      >
        <i className="ti ti-chevron-left" />
      </button>
      <button
        className="carousel-arrow next"
        onClick={() => moveCarousel(1)}
        aria-label="Siguiente"
      >
        <i className="ti ti-chevron-right" />
      </button>

      <div className="carousel-nav">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}