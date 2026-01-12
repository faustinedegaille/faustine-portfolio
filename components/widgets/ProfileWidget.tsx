import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function ProfileWidget() {
  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="py-1.5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Profil</CardTitle>
          <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-2.5 py-0.5 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Disponible
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 pb-2">
        <div className="grid grid-cols-[150px_1fr] gap-3">
          <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/10">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold leading-tight">
              Développeuse front-end · Web designer
            </p>

            <div className="mt-0.5">
              <p className="text-xs font-medium leading-tight">
                BUT MMI (3ᵉ année)
              </p>
              <p className="text-xs text-muted-foreground leading-tight">
                IUT de Troyes
              </p>
            </div>

            <Button
              asChild
              size="sm"
              className="mt-auto h-8 rounded-full px-3 text-xs"
            >
              <a href="/docs/CV_DEGAILLE.pdf" target="_blank" rel="noreferrer">
                Télécharger le CV
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-1" />

        <div className="rounded-xl bg-black/3 p-2">
          <p className="text-sm font-semibold leading-tight">
            Alternance chez Altermaker
          </p>
          <p className="text-xs text-muted-foreground leading-tight">
            Développement front-end
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
