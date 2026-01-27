"use client"

import { useState, useEffect, useCallback } from "react"
import { ProfileWidget } from "@/components/widgets/ProfileWidget"
import { SkillsWidget } from "@/components/widgets/SkillsWidget"
import { ContactWidget } from "@/components/widgets/ContactWidget"
import { FocusWidget } from "@/components/widgets/FocusWidget"
import { ExperienceWidget } from "@/components/widgets/ExperienceWidget"

export default function Home() {
  const [focusSkill, setFocusSkill] = useState<string | null>(null)

  const handleOpenFocus = useCallback((skill: string) => {
    setFocusSkill(skill)
    window.history.pushState({ focusSkill: skill }, "", `#${skill}`)
  }, [])

  const handleCloseFocus = useCallback(() => {
    setFocusSkill(null)
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname)
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        setFocusSkill(hash)
      } else {
        setFocusSkill(null)
      }
    }

    window.addEventListener("popstate", handlePopState)

    // Check initial hash on mount
    const initialHash = window.location.hash.slice(1)
    if (initialHash) {
      setFocusSkill(initialHash)
    }

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  return (
    <main className="min-h-dvh bg-[#f6f7fb] px-3 py-4 md:px-4 lg:h-dvh">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-3 md:gap-4">
        <header className="shrink-0">
          <p className="text-xs text-muted-foreground">Portfolio</p>
          <h1 className="text-2xl md:text-3xl font-semibold">Faustine Degaille</h1>
          <p className="text-sm text-muted-foreground">
            Développeuse front-end & web designer
          </p>
        </header>

        <section className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 min-h-0 pb-4 lg:pb-0 lg:grid-rows-2">
          {focusSkill ? (
            <div className="col-span-1 md:col-span-2 md:row-span-2 min-h-[70vh] md:min-h-0 md:h-full">
              <FocusWidget
                skill={focusSkill}
                onClose={handleCloseFocus}
              />
            </div>
          ) : (
            <>
              <div className="min-h-[280px] md:min-h-0 md:h-full">
                <ProfileWidget />
              </div>
              <div className="min-h-[350px] md:min-h-0 md:h-full">
                <ExperienceWidget />
              </div>
              <div className="min-h-[250px] md:min-h-0 md:h-full">
                <SkillsWidget onCtaClick={handleOpenFocus} />
              </div>
              <div className="min-h-[300px] md:min-h-0 md:h-full">
                <ContactWidget />
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  )
}
