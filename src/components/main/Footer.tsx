'use client'

import { motion } from 'motion/react'
import { FC } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { RxGithubLogo } from 'react-icons/rx'

const Footer: FC = () => {
  const socialLinks = [
    {
      href: 'https://github.com/AguuSz',
      icon: <RxGithubLogo className="w-5 h-5" />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/agustin-sepulveda',
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer className="relative w-full px-6 py-12 mt-20 bg-background text-foreground border-t border-border transition-colors">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-3 via-accent-2 to-accent-4" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={childVariants}>
            <h1 title="Agustin Sepulveda" className="text-2xl font-extrabold bg-clip-text">Agustin Sepulveda</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DevOps & Infrastructure Engineer specializing in Kubernetes, AWS, GCP, and CI/CD automation.
              Building resilient cloud & on-premise infrastructure.
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={childVariants}>
            <h2 title="Connect" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Connect
            </h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-gradient-to-r hover:from-accent-2 hover:to-accent-3 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  aria-label={`Visit my ${link.label} profile`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground">
                Keywords: DevOps Portfolio, Infrastructure Engineer, AWS, GCP, Kubernetes, RKE2, Terraform, CI/CD
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
