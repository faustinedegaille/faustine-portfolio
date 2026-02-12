"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProfileWidget() {
  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0 md:px-vp md:py-vg">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl md:text-v-title">Profil</CardTitle>
          <div className="flex items-center gap-1.5 md:gap-vs rounded-full border border-black/5 bg-white/60 px-2 md:px-3 py-0.5 md:py-1 text-sm md:text-v-sm">
            <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-500" />
            Disponible
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 px-4 md:px-vp pb-3 md:pb-vs overflow-hidden">
        <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[clamp(120px,12vw,220px)_1fr] gap-3 md:gap-vg h-full">
          <div className="relative min-h-30 sm:min-h-35 h-full overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-black/10">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between h-full min-w-0">
            <div className="space-y-1.5 md:space-y-vs">
              <p className="text-lg sm:text-xl md:text-v-base font-semibold leading-tight">
                Développeuse front-end
                <br />
                Web designer
              </p>

              <div className="space-y-0.5">
                <p className="text-base md:text-v-base font-medium">
                  BUT MMI · 3ᵉ année
                </p>
                <p className="text-sm md:text-v-sm text-muted-foreground">
                  IUT de Troyes
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-vs pt-1 md:pt-vs">
                <span className="rounded-full bg-black/5 px-2 sm:px-2.5 md:px-3 py-0.5 md:py-[0.4vh] text-xs sm:text-sm md:text-v-sm font-medium">
                  Alternance · Altermaker
                </span>
                <span className="rounded-full bg-black/5 px-2 sm:px-2.5 md:px-3 py-0.5 md:py-[0.4vh] text-xs sm:text-sm md:text-v-sm text-muted-foreground">
                  Développement front-end
                </span>
                <span className="rounded-full bg-black/5 px-2 sm:px-2.5 md:px-3 py-0.5 md:py-[0.4vh] text-xs sm:text-sm md:text-v-sm text-muted-foreground">
                  Web design
                </span>
              </div>
            </div>

            <div className="pt-2 md:pt-vs">
              <Button
                asChild
                size="default"
                className="h-8 md:h-[3.2vh] w-full rounded-full text-sm md:text-v-sm border-0 shadow-none"
              >
                <Link
                  href="/docs/CV_DEGAILLE.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Télécharger le CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
