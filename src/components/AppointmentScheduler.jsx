import { useState } from 'react'

export default function AppointmentScheduler() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  
  // Número de WhatsApp del negocio (Studio Greisy)
  const businessWhatsApp = '+573117087666'

  const services = [
    { id: 'extensiones', name: 'Extensiones de pestañas', duration: '2h' },
    { id: 'lifting', name: 'Lifting de pestañas', duration: '1h' },
    { id: 'diseno-cejas', name: 'Diseño de cejas', duration: '45min' },
    { id: 'laminado-cejas', name: 'Laminado de Cejas', duration: '1h' },
    { id: 'microblading', name: 'Microblading', duration: '2h' },
    { id: 'combo', name: 'Combo Cejas + Pestañas', duration: '2.5h' }
  ]

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ]

  const generateWhatsAppMessage = () => {
    if (!selectedService || !selectedDate || !selectedTime) return '#'

    const service = services.find(s => s.id === selectedService)
    
    // Formatear la fecha para mostrarla en español
    const dateObj = new Date(selectedDate + 'T00:00:00')
    const formattedDate = dateObj.toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const message = `🗓️ *NUEVA SOLICITUD DE CITA* - Studio Greisy ✨

👤 *Cliente:* ${clientName}
📱 *Teléfono:* ${clientPhone}
💅 *Servicio:* ${service.name} (${service.duration})
📅 *Fecha:* ${formattedDate}
⏰ *Hora:* ${selectedTime}

━━━━━━━━━━━━━━━━━━
📍 *Studio Greisy - Cejas y Pestañas*
💇‍♀️ ¡Tu belleza es nuestra prioridad!

✅ Por favor confirmar disponibilidad para esta cita.`
    
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${businessWhatsApp}?text=${encodedMessage}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const link = generateWhatsAppMessage()
    if (link !== '#') {
      window.open(link, '_blank')
      setIsModalOpen(false)
      // Reset form
      setSelectedService('')
      setSelectedDate('')
      setSelectedTime('')
      setClientName('')
      setClientPhone('')
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Floating Calendar Button */}
      <button
        className="calendar-fab"
        onClick={() => setIsModalOpen(true)}
        aria-label="Agendar cita"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>×</button>
            <h2 className="modal-title">Agendar Cita</h2>
            <p className="modal-subtitle">Selecciona tu servicio y horario preferido</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Servicio</label>
                <select
                  className="form-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Fecha</label>
                <input
                  className="form-input"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Hora</label>
                <select
                  className="form-select"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Selecciona una hora</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Nombre Completo</label>
                <input
                  className="form-input"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Teléfono de Contacto</label>
                <input
                  className="form-input"
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Tu teléfono"
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={!selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone}
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}