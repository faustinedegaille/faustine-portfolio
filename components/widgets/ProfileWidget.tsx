import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function ProfileWidget() {
  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Profil</CardTitle>
          <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Disponible
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex h-[calc(100%-44px)] flex-col gap-3 overflow-auto">
        <div className="grid grid-cols-[180px_1fr] gap-3">
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
            <p className="text-sm font-semibold">
              Développeuse front-end · Web designer
            </p>

            <div className="mt-1">
              <p className="text-xs font-medium">BUT MMI (3ᵉ année)</p>
              <p className="text-xs text-muted-foreground">IUT de Troyes</p>
            </div>

            <Button asChild size="sm" className="mt-auto rounded-full">
              <a href="/docs/CV_DEGAILLE.pdf" target="_blank">
                Télécharger le CV
              </a>
            </Button>
          </div>
        </div>

        <Separator />

        <div className="rounded-xl bg-black/3 p-3">
          <p className="text-sm font-semibold">Alternance chez Altermaker</p>
          <p className="text-xs text-muted-foreground">
            Développement front-end
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
