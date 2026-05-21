import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiFigma,
  SiAdobe,
  SiThreedotjs,
  SiSass,
  SiTailwindcss,
  SiCanva,
} from "react-icons/si"
import { FaBookReader } from "react-icons/fa"
import type { IconType } from "react-icons"

export type Skill = {
  icon: IconType
  title: string
  label: string
  cta?: string
}

export const skills: Skill[] = [
  { icon: SiFigma, title: "figma", label: "Figma", cta: "Voir les travaux →" },
  { icon: SiAdobe, title: "adobe", label: "Adobe Suite", cta: "Voir les travaux →" },
  { icon: SiCanva, title: "canva", label: "Canva", cta: "Voir les créations →" },
  { icon: FaBookReader, title: "influence-litteraire", label: "Influence littéraire", cta: "Découvrir →" },
  { icon: SiTailwindcss, title: "tailwind", label: "Tailwind CSS", cta: "Voir les projets →" },
  { icon: SiSass, title: "sass", label: "Sass", cta: "Voir les projets →" },
  { icon: SiNextdotjs, title: "next.js", label: "Next.js", cta: "Voir les projets →" },
  { icon: SiNuxtdotjs, title: "nuxt", label: "Nuxt", cta: "Voir les projets →" },
  { icon: SiTypescript, title: "typescript", label: "TypeScript", cta: "Voir les projets →" },
  { icon: SiThreedotjs, title: "threejs", label: "Three.js", cta: "Voir les projets →" },
]
