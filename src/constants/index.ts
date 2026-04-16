export interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
}

export const skills: Skill[] = [
  // Orquestación & Containers
  { skill_name: 'Kubernetes', Image: '/kubernetes.png', width: 50, height: 50 },
  { skill_name: 'RKE2', Image: '/rke2.svg', width: 70, height: 70 },
  { skill_name: 'Rancher', Image: '/rancher.svg', width: 70, height: 70 },
  { skill_name: 'Docker', Image: '/docker.webp', width: 70, height: 70 },
  { skill_name: 'Helm', Image: '/helm.svg', width: 70, height: 70 },

  // Cloud
  { skill_name: 'AWS', Image: '/aws.png', width: 70, height: 70 },
  { skill_name: 'GCP', Image: '/gcp.svg', width: 70, height: 70 },

  // IaC & Automatización
  { skill_name: 'Terraform', Image: '/terraform.png', width: 80, height: 80 },
  { skill_name: 'Packer', Image: '/packer.svg', width: 70, height: 70 },
  { skill_name: 'Ansible', Image: '/ansible.svg', width: 80, height: 80 },

  // CI/CD
  { skill_name: 'Jenkins', Image: '/jenkins.svg', width: 80, height: 80 },

  // Virtualización
  { skill_name: 'Proxmox', Image: '/proxmox.svg', width: 70, height: 70 },
  { skill_name: 'VMware ESXi', Image: '/vmware.svg', width: 70, height: 70 },

  // Monitoreo & Observabilidad
  { skill_name: 'Prometheus', Image: '/prometheus.svg', width: 80, height: 80 },
  { skill_name: 'OpenObserve', Image: '/openobserve.svg', width: 70, height: 70 },

  // Networking & Security
  { skill_name: 'Caddy', Image: '/caddy.svg', width: 70, height: 70 },
  { skill_name: 'Nginx', Image: '/nginx.svg', width: 70, height: 70 },
  { skill_name: 'Cloudflare', Image: '/cloudflare.svg', width: 70, height: 70 },
  { skill_name: 'Tailscale', Image: '/tailscale.svg', width: 70, height: 70 },

  // Storage
  { skill_name: 'Longhorn', Image: '/longhorn.svg', width: 70, height: 70 },

  // Bases de datos
  { skill_name: 'PostgreSQL', Image: '/postger.png', width: 70, height: 70 },

  // OS & Sistemas
  { skill_name: 'Linux', Image: '/linux.svg', width: 70, height: 70 },

  // Desarrollo
  { skill_name: 'Python', Image: '/python.svg', width: 70, height: 70 },
  { skill_name: 'Spring Boot', Image: '/spring.svg', width: 70, height: 70 },
  { skill_name: 'Git', Image: '/git.svg', width: 70, height: 70 },
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
