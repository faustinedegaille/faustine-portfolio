"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export function FocusWidget({
  title,
  onClose,
}: {
  title: string
  onClose: () => void
}) {
  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 border border-black/5 hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>
      </CardHeader>

      <CardContent className="h-[calc(100%-44px)]">
        <div className="flex h-full items-center justify-center rounded-2xl bg-white/70 border border-black/5">
          <p className="text-sm text-muted-foreground">Travaux</p>
        </div>
      </CardContent>
    </Card>
  )
}
