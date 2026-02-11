import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiAdobe,
  SiThreedotjs,
  SiGithub,
  SiSass,
  SiTailwindcss,
} from "react-icons/si"
import type { IconType } from "react-icons"

export type Skill = {
  icon: IconType
  title: string
  label: string
  cta?: string
}

export const skills: Skill[] = [
  { icon: SiNextdotjs, title: "next.js", label: "Next.js", cta: "Voir les projets →" },
  { icon: SiNuxtdotjs, title: "nuxt", label: "Nuxt", cta: "Voir les projets →" },
  { icon: SiJavascript, title: "javascript", label: "JavaScript", cta: "Voir les projets →" },
  { icon: SiTypescript, title: "typescript", label: "TypeScript", cta: "Voir les projets →" },
  { icon: SiThreedotjs, title: "threejs", label: "Three.js", cta: "Voir les projets →" },
  { icon: SiSass, title: "sass", label: "Sass", cta: "Voir les projets →" },
  { icon: SiTailwindcss, title: "tailwind", label: "Tailwind CSS", cta: "Voir les projets →" },
  { icon: SiFigma, title: "figma", label: "Figma", cta: "Voir les travaux →" },
  { icon: SiAdobe, title: "adobe", label: "Adobe Suite", cta: "Voir les travaux →" },
  { icon: SiGithub, title: "github", label: "GitHub" },
]
