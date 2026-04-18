import type { IconType } from 'react-icons'
import {
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
  SiApple,
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
  // Cloud
  { skill_name: 'AWS', image: '/aws.jpeg' },
  { skill_name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { skill_name: 'Oracle Cloud', image: '/oracle.png' },

  // Orquestación & Containers
  { skill_name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { skill_name: 'RKE2', image: '/rke2.png' },
  { skill_name: 'Docker', icon: SiDocker, color: '#2496ED' },
  
  // IaC & Automatización
  { skill_name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
  { skill_name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
  
  // CI/CD
  { skill_name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { skill_name: 'Git', icon: SiGit, color: '#F05032' },
  { skill_name: 'Helm', icon: SiHelm, color: '#0F1689' },
  
  // Virtualización
  { skill_name: 'Proxmox', icon: SiProxmox, color: '#E57000' },
  { skill_name: 'VMware ESXi', icon: SiVmware, color: '#607078' },
  
  // Monitoreo & Observabilidad
  { skill_name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
  { skill_name: 'OpenObserve', image: '/openobserve.png' },
  { skill_name: 'Grafana', image: '/grafana.png' },
  { skill_name: 'Rancher', icon: SiRancher, color: '#0075A8' },

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
  { skill_name: 'macOS', icon: SiApple, color: '#FFFFFF' },
  { skill_name: 'Windows', image: '/windows.svg' },

  // Desarrollo
  { skill_name: 'Python', icon: SiPython, color: '#3776AB' },

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
