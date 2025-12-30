export interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
}

export interface HeaderParticle {
  id: number
  x: number
  y: number
  color: string
}

export interface FormData {
  name: string
  email: string
  company: string
  notes: string
  region: string
  city: string
  phone: string
  country: string
}
