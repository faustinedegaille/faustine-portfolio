"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiAdobe,
  SiDocker,
  SiGithub,
  SiSass,
  SiTailwindcss,
} from "react-icons/si"

const skills = [
  {
    icon: SiNextdotjs,
    title: "Next.js",
    subtitle: "App Router · React framework",
    cta: "Voir les projets →",
  },
  {
    icon: SiNuxtdotjs,
    title: "Nuxt",
    subtitle: "Vue framework · SSR / SSG",
    cta: "Voir les projets →",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    subtitle: "ES6+",
    cta: "Voir les projets →",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    subtitle: "Typed JavaScript",
    cta: "Voir les projets →",
  },
  {
    icon: SiSass,
    title: "Sass",
    subtitle: "CSS preprocessor",
    cta: "Voir les projets →",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    subtitle: "Utility-first CSS",
    cta: "Voir les projets →",
  },
  {
    icon: SiFigma,
    title: "Figma",
    subtitle: "UI · UX",
    cta: "Voir les travaux →",
  },
  {
    icon: SiAdobe,
    title: "Adobe Suite",
    subtitle: "Design & motion",
    cta: "Voir les travaux →",
  },
  {
    icon: SiDocker,
    title: "Docker",
    subtitle: "Local environments",
  },
  {
    icon: SiGithub,
    title: "GitHub",
    subtitle: "Version control",
  },
]

export function SkillsWidget({ onCtaClick }: { onCtaClick: () => void }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Compétences</CardTitle>
      </CardHeader>

      <CardContent className="h-[calc(100%-44px)] overflow-auto space-y-2">
        {skills.map((s) => {
          const isActive = active === s.title
          const isDimmed = active && !isActive

          return (
            <motion.div
              key={s.title}
              onHoverStart={() => setActive(s.title)}
              onHoverEnd={() => setActive(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`
                relative
                flex items-center justify-between
                rounded-2xl px-4 py-3
                bg-white
                shadow-[0_1px_6px_rgba(0,0,0,0.06)]
                transition-opacity
                cursor-pointer
                ${isDimmed ? "opacity-40" : "opacity-100"}
              `}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                  <s.icon className="text-base" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{s.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {s.subtitle}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {isActive && s.cta && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="ml-4 shrink-0 whitespace-nowrap text-xs font-medium text-black/60 hover:text-black/80"
                    onClick={(e) => {
                      e.stopPropagation()
                      onCtaClick()
                    }}
                  >
                    {s.cta}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </CardContent>
    </Card>
  )
}
