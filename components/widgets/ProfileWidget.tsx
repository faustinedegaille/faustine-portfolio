"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProfileWidget() {
  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Profil</CardTitle>
          <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Disponible
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 px-6 pb-6">
        <div className="grid h-full grid-cols-[220px_1fr] gap-6">
          <div className="relative h-full overflow-hidden rounded-3xl ring-1 ring-black/10">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex h-full flex-col justify-between">
            <div className="space-y-3">
              <p className="text-2xl font-semibold leading-tight">
                Développeuse front-end
                <br />
                Web designer
              </p>

              <div className="space-y-0.5">
                <p className="text-base font-medium">
                  BUT MMI · 3ᵉ année
                </p>
                <p className="text-sm text-muted-foreground">
                  IUT de Troyes
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full bg-black/5 px-4 py-1.5 text-sm font-medium">
                  Alternance · Altermaker
                </span>
                <span className="rounded-full bg-black/5 px-4 py-1.5 text-sm text-muted-foreground">
                  Développement front-end
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                Je travaille en alternance chez Altermaker à Troyes sur le
                développement de logiciels d’écoconception, principalement en
                Next.js, avec une approche orientée performance, accessibilité
                et impact environnemental.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="h-11 w-full rounded-full text-base"
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
