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
      <CardHeader className="shrink-0 md:px-vp md:py-vg">
        <CardTitle className="text-base md:text-v-title">Projets par compétences</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-1.5 md:gap-vs flex-1 min-h-0 overflow-y-auto pb-2 md:pb-vs">
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
              className={`relative flex items-center justify-between rounded-xl md:rounded-2xl px-2 md:px-3 py-2.5 md:py-vs bg-white shadow-[0_1px_6px_rgba(0,0,0,0.06)] cursor-pointer transition-opacity min-h-11 ${isDimmed ? "opacity-40" : "opacity-100"}`}
            >
              <div className="flex items-center gap-2 md:gap-2 min-w-0">
                <div className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-black/5 shrink-0">
                  <s.icon className="text-xs md:text-v-xs" />
                </div>
                <p className="text-xs md:text-v-sm font-medium truncate">{s.label}</p>
              </div>

              <AnimatePresence>
                {isActive && s.cta && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] md:text-v-2xs font-medium text-black/60 hover:text-black/80 hidden md:block shrink-0"
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
