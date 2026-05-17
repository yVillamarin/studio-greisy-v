import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          &copy; 2026 Studio Greisy. Todos los derechos reservados.
        </motion.p>
        <motion.p 
          style={{ marginTop: '0.5rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Pereira, Risaralda - Colombia
        </motion.p>
      </div>
    </motion.footer>
  )
}