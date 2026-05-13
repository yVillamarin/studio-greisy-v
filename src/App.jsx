import React from 'react'
import Carousel from './components/Carousel'
import About from './components/About'
import Gallery from './components/Gallery'
import Promotions from './components/Promotions'
import Services from './components/Services'
import ProductsCarousel from './components/ProductsCarousel'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AppointmentScheduler from './components/AppointmentScheduler'
import Location from './components/Location'

function App() {
  return (
    <div className="App">
      <Carousel />
      <About />
      <Services />
      <AppointmentScheduler />
      <Gallery />
      <Promotions />
      <ProductsCarousel />
      <Benefits />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}

export default App