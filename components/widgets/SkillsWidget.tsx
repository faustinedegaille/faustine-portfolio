"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { skills } from "@/data/skills"

export function SkillsWidget({
  onCtaClick,
}: {
  onCtaClick: (skill: string) => void
}) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0 md:px-vp md:py-vg">
        <div className="flex flex-col gap-0.5">
          <CardTitle className="text-xl md:text-v-title">Compétences</CardTitle>
          <p className="hidden md:block text-xs md:text-v-2xs text-black/35 italic">Survolez pour en savoir plus</p>
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 auto-rows-fr gap-1.5 md:gap-vs flex-1 min-h-0 overflow-y-auto pb-2 md:pb-vs">
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
              className={`relative flex items-center justify-between rounded-xl md:rounded-2xl px-2 md:px-3 py-2 md:py-[0.8vh] bg-white shadow-[0_1px_6px_rgba(0,0,0,0.06)] cursor-pointer transition-opacity min-h-9 ${isDimmed ? "opacity-40" : "opacity-100"}`}
            >
              <div className="flex items-center gap-2 md:gap-2 min-w-0">
                <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-full bg-black/5 shrink-0">
                  <s.icon className="text-sm md:text-v-sm" />
                </div>
                <p className="text-sm md:text-v-base font-medium truncate">{s.label}</p>
              </div>

              {s.cta && (
                <div className="flex items-center gap-1.5 shrink-0">
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs md:text-v-2xs font-medium text-black/50 hidden md:block whitespace-nowrap"
                      >
                        Voir les projets
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-200 ${
                      isActive ? "bg-black text-white" : "bg-black/8 text-black/35"
                    }`}
                  >
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </CardContent>
    </Card>
  )
}
