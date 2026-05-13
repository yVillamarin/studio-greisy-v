// Carousel Script
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = slides.length;
let autoplayInterval;

function updateCarousel() {
    const slidesContainer = document.getElementById('carouselSlides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveCarousel(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateCarousel();
    resetAutoplay();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoplay();
}

function autoplay() {
    autoplayInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplay();
}

// Iniciar autoplay
autoplay();

// Pausar en hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});
carouselContainer.addEventListener('mouseleave', () => {
    autoplay();
});

// Smooth scroll para los enlaces del carrusel
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Products Carousel
let currentProductSlide = 0;
let productsPerView = getProductsPerView();
const productTrack = document.getElementById('productsCarouselTrack');
const productSlides = document.querySelectorAll('.product-slide');
const productsDotsContainer = document.getElementById('productsDots');
const totalProductSlides = productSlides.length;
let totalPages = Math.ceil(totalProductSlides / productsPerView);
let currentPage = 0;

function getProductsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function createProductDots() {
    productsDotsContainer.innerHTML = '';
    totalPages = Math.ceil(totalProductSlides / productsPerView);
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.classList.add('products-carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToProductSlide(i));
        productsDotsContainer.appendChild(dot);
    }
}

function updateProductsCarousel() {
    const offset = -currentPage * (100 / productsPerView);
    productTrack.style.transform = `translateX(${offset}%)`;

    const dots = document.querySelectorAll('.products-carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
    });
}

function moveProductsCarousel(direction) {
    currentPage = (currentPage + direction + totalPages) % totalPages;
    currentProductSlide = currentPage * productsPerView;
    updateProductsCarousel();
}

function goToProductSlide(pageIndex) {
    currentPage = pageIndex;
    currentProductSlide = currentPage * productsPerView;
    updateProductsCarousel();
}

createProductDots();

window.addEventListener('resize', () => {
    const newPerView = getProductsPerView();
    if (newPerView !== productsPerView) {
        productsPerView = newPerView;
        currentPage = 0;
        currentProductSlide = 0;
        totalPages = Math.ceil(totalProductSlides / productsPerView);
        createProductDots();
        updateProductsCarousel();
    }
});

// Animaciones de entrada para tarjetas de servicios
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
            serviceObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    serviceObserver.observe(card);
});