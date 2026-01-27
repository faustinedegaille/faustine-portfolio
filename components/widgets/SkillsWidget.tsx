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
  { icon: SiNextdotjs, title: "next.js", label: "Next.js", cta: "Voir les projets →" },
  { icon: SiNuxtdotjs, title: "nuxt", label: "Nuxt", cta: "Voir les projets →" },
  { icon: SiJavascript, title: "javascript", label: "JavaScript", cta: "Voir les projets →" },
  { icon: SiTypescript, title: "typescript", label: "TypeScript", cta: "Voir les projets →" },
  { icon: SiSass, title: "sass", label: "Sass", cta: "Voir les projets →" },
  { icon: SiTailwindcss, title: "tailwind", label: "Tailwind CSS", cta: "Voir les projets →" },
  { icon: SiFigma, title: "figma", label: "Figma", cta: "Voir les travaux →" },
  { icon: SiAdobe, title: "adobe", label: "Adobe Suite", cta: "Voir les travaux →" },
  { icon: SiDocker, title: "docker", label: "Docker" },
  { icon: SiGithub, title: "github", label: "GitHub" },
]

export function SkillsWidget({
  onCtaClick,
}: {
  onCtaClick: (skill: string) => void
}) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0">
        <CardTitle className="text-base">Projets par compétences</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-1.5 md:gap-2 flex-1 min-h-0 overflow-auto">
        {skills.map((s) => {
          const isActive = active === s.title
          const isDimmed = active && !isActive

          return (
            <motion.div
              key={s.title}
              onHoverStart={() => setActive(s.title)}
              onHoverEnd={() => setActive(null)}
              onTouchStart={() => setActive(s.title)}
              onTouchEnd={() => setActive(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => s.cta && onCtaClick(s.title)}
              className={`relative flex items-center justify-between rounded-xl md:rounded-2xl px-2 md:px-3 py-2 md:py-2.5 bg-white shadow-[0_1px_6px_rgba(0,0,0,0.06)] cursor-pointer transition-opacity ${isDimmed ? "opacity-40" : "opacity-100"}`}
            >
              <div className="flex items-center gap-2 md:gap-2.5">
                <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-black/5">
                  <s.icon className="text-xs md:text-base" />
                </div>
                <p className="text-xs md:text-sm font-medium">{s.label}</p>
              </div>

              <AnimatePresence>
                {isActive && s.cta && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] md:text-xs font-medium text-black/60 hover:text-black/80 hidden md:block"
                    onClick={(e) => {
                      e.stopPropagation()
                      onCtaClick(s.title)
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
