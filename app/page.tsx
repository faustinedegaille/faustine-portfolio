"use client"

import { useState } from "react"
import { ProfileWidget } from "@/components/widgets/ProfileWidget"
import { SelectedWorkWidget } from "@/components/widgets/SelectedWorkWidget"
import { SkillsWidget } from "@/components/widgets/SkillsWidget"
import { ContactWidget } from "@/components/widgets/ContactWidget"
import { FocusWidget } from "@/components/widgets/FocusWidget"

export default function Home() {
  const [focus, setFocus] = useState<null | "works">(null)

  return (
    <main className="h-dvh bg-[#f6f7fb] px-4 py-4">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-4">
        <header className="shrink-0">
          <p className="text-xs text-muted-foreground">Portfolio</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Faustine Degaille
          </h1>
          <p className="text-sm text-muted-foreground">
            Développeuse front-end & web designer
          </p>
        </header>

        {focus ? (
          <section className="min-h-0 flex-1">
            <FocusWidget title="Travaux" onClose={() => setFocus(null)} />
          </section>
        ) : (
          <section className="grid flex-1 grid-cols-12 grid-rows-2 gap-4 min-h-0">
            <div className="col-span-5 row-span-1 min-h-0">
              <ProfileWidget />
            </div>

            <div className="col-span-7 row-span-1 min-h-0">
              <SelectedWorkWidget />
            </div>

            <div className="col-span-8 row-span-1 min-h-0">
              <SkillsWidget onCtaClick={() => setFocus("works")} />
            </div>

            <div className="col-span-4 row-span-1 min-h-0">
              <ContactWidget />
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
