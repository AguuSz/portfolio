'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { Badge } from '../ui/badge'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

const projectsData = [
  {
    title: 'To be completed',
    description: 'Project showcase coming soon. In the meantime, check out my GitHub for personal projects, infrastructure experiments, and homelab configurations.',
    github: 'https://github.com/AguuSz',
    tags: ['Coming Soon'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-80 right-24 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-60 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 title="My Projects" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-3">
            A collection of infrastructure, automation, and homelab projects.
          </p>
        </motion.div>
      </div>

      <BentoGrid className="max-w-6xl mx-auto [@media(max-width:425px)]:grid-cols-1">
        {projectsData.map((project) => (
          <div key={project.title} className="relative md:col-span-2">
            <BentoGridItem
              title={project.title}
              description={
                <div className="space-y-3 text-sm text-foreground">
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge asChild variant="secondary" className="gap-1 rounded-full">
                      <a
                        title="View GitHub profile"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <FaGithub className="size-3" />
                        GitHub
                      </a>
                    </Badge>
                  </div>
                </div>
              }
              header={
                <div className="relative w-full h-full [@media(max-width:425px)]:min-h-[9rem] min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-blue-500/10 to-transparent flex items-center justify-center">
                  <FaGithub className="w-16 h-16 text-primary/40" />
                </div>
              }
            />
          </div>
        ))}
      </BentoGrid>
    </section>
  )
}

export default Projects
