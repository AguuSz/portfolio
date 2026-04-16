'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import type { Skill } from '@/constants'

interface Props {
  skill: Skill
  size?: number
  index: number
  className?: string
}

const SkillDataProvider = ({ skill, size = 40, index, className }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * 0.05 }}
      className={className}
      style={{ width: size, height: size }}
    >
      {Icon ? (
        <Icon size={size} color={skill.color ?? 'currentColor'} aria-label={skill.skill_name} />
      ) : skill.image ? (
        <Image
          src={skill.image}
          width={size}
          height={size}
          alt={`${skill.skill_name} logo`}
          className="object-contain"
        />
      ) : (
        <div
          className="flex items-center justify-center w-full h-full rounded bg-muted text-muted-foreground text-xs font-semibold"
          aria-label={skill.skill_name}
        >
          {skill.skill_name.charAt(0)}
        </div>
      )}
    </motion.div>
  )
}

export default SkillDataProvider
