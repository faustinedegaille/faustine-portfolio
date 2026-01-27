"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProfileWidget() {
  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base md:text-lg">Profil</CardTitle>
          <div className="flex items-center gap-1.5 md:gap-2 rounded-full border border-black/5 bg-white/60 px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm">
            <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-500" />
            Disponible
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 px-4 md:px-6 pb-4 md:pb-6">
        <div className="grid h-full grid-cols-[100px_1fr] md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-3 md:gap-4 lg:gap-6">
          <div className="relative h-full min-h-[140px] overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-black/10">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex h-full flex-col justify-between">
            <div className="space-y-1.5 md:space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                Développeuse front-end
                <br />
                Web designer
              </p>

              <div className="space-y-0.5">
                <p className="text-sm md:text-base font-medium">
                  BUT MMI · 3ᵉ année
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  IUT de Troyes
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                <span className="rounded-full bg-black/5 px-2.5 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium">
                  Alternance · Altermaker
                </span>
                <span className="rounded-full bg-black/5 px-2.5 md:px-4 py-1 md:py-1.5 text-xs md:text-sm text-muted-foreground">
                  Développement front-end
                </span>
              </div>
            </div>

            <div className="pt-3 md:pt-4">
              <Button
                size="default"
                className="h-9 md:h-11 w-full rounded-full text-sm md:text-base"
              >
                <a
                  href="/docs/CV_DEGAILLE.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Télécharger le CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
