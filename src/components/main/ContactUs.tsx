'use client'

import { motion, Variants } from 'motion/react'
import { FC } from 'react'
import { FaLinkedin } from 'react-icons/fa'

const ContactUs: FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="contact" className="relative py-10 bg-background text-foreground transition-colors overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-12 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-16 w-20 h-20 bg-accent-2/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-accent-2/10 rounded-lg rotate-12 float-animation"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-accent-2/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-accent-2/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-12 shadow-2xl text-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-extrabold text-heading-gradient"
            variants={childVariants}
          >
            Connect With Me
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground leading-relaxed text-base max-w-lg mx-auto"
            variants={childVariants}
          >
            Whether you have a professional opportunity, a collaboration in mind, or simply want to connect — I'm always open to new conversations. Let's get in touch.
          </motion.p>
          <motion.a
            href="https://www.linkedin.com/in/agustin-sepulveda"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-gradient-to-r hover:from-accent-2 hover:to-accent-3 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Connect with me on LinkedIn"
            variants={childVariants}
          >
            <FaLinkedin className="w-5 h-5" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
