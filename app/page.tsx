"use client"

import { useState } from "react"
import { ProfileWidget } from "@/components/widgets/ProfileWidget"
import { SelectedWorkWidget } from "@/components/widgets/SelectedWorkWidget"
import { SkillsWidget } from "@/components/widgets/SkillsWidget"
import { ContactWidget } from "@/components/widgets/ContactWidget"
import { FocusWidget } from "@/components/widgets/FocusWidget"

export default function Home() {
  const [focusSkill, setFocusSkill] = useState<string | null>(null)

  return (
    <main className="h-dvh bg-[#f6f7fb] px-4 py-4">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-4">
        <header className="shrink-0">
          <p className="text-xs text-muted-foreground">Portfolio</p>
          <h1 className="text-3xl font-semibold">Faustine Degaille</h1>
          <p className="text-sm text-muted-foreground">
            Développeuse front-end & web designer
          </p>
        </header>

        <section className="grid flex-1 grid-cols-2 grid-rows-2 gap-4 min-h-0">
          {focusSkill ? (
            <div className="col-span-2 row-span-2 h-full">
              <FocusWidget
                skill={focusSkill}
                onClose={() => setFocusSkill(null)}
              />
            </div>
          ) : (
            <>
              <div className="h-full">
                <ProfileWidget />
              </div>
              <div className="h-full">
                <SelectedWorkWidget />
              </div>
              <div className="h-full">
                <SkillsWidget onCtaClick={setFocusSkill} />
              </div>
              <div className="h-full">
                <ContactWidget />
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  )
}
