import type { IconType } from 'react-icons'
import {
  SiAmazon,
  SiAnsible,
  SiCaddy,
  SiCloudflare,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiPacker,
  SiPostgresql,
  SiPrometheus,
  SiProxmox,
  SiPython,
  SiRancher,
  SiSpringboot,
  SiTailscale,
  SiTerraform,
  SiVmware,
} from 'react-icons/si'

export interface Skill {
  skill_name: string
  /** React icon component from react-icons (preferred when available) */
  icon?: IconType
  /** Brand color (hex) for the icon, when using a React icon component */
  color?: string
  /** Image path under /public/ — fallback for skills not covered by simple-icons */
  image?: string
}

export const skills: Skill[] = [
  // Orquestación & Containers
  { skill_name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { skill_name: 'RKE2', image: '/rke2.png' },
  { skill_name: 'Rancher', icon: SiRancher, color: '#0075A8' },
  { skill_name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { skill_name: 'Helm', icon: SiHelm, color: '#0F1689' },

  // Cloud
  { skill_name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { skill_name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },

  // IaC & Automatización
  { skill_name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
  { skill_name: 'Packer', icon: SiPacker, color: '#02A8EF' },
  { skill_name: 'Ansible', icon: SiAnsible, color: '#EE0000' },

  // CI/CD
  { skill_name: 'Jenkins', icon: SiJenkins, color: '#D24939' },

  // Virtualización
  { skill_name: 'Proxmox', icon: SiProxmox, color: '#E57000' },
  { skill_name: 'VMware ESXi', icon: SiVmware, color: '#607078' },

  // Monitoreo & Observabilidad
  { skill_name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
  { skill_name: 'OpenObserve', image: '/openobserve.png' },

  // Networking & Security
  { skill_name: 'Caddy', icon: SiCaddy, color: '#1F88C0' },
  { skill_name: 'Nginx', icon: SiNginx, color: '#009639' },
  { skill_name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
  { skill_name: 'Tailscale', icon: SiTailscale, color: '#242424' },

  // Storage
  { skill_name: 'Longhorn', image: '/longhorn.png' },

  // Bases de datos
  { skill_name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },

  // OS & Sistemas
  { skill_name: 'Linux', icon: SiLinux, color: '#FCC624' },

  // Desarrollo
  { skill_name: 'Python', icon: SiPython, color: '#3776AB' },
  { skill_name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { skill_name: 'Git', icon: SiGit, color: '#F05032' },
]

export const Socials = [
  {
    name: 'GitHub',
    src: '/github.svg',
    link: 'https://github.com/AguuSz',
  },
  {
    name: 'LinkedIn',
    src: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/agustin-sepulveda',
  },
]
