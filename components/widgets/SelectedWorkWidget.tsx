"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function SelectedWorkWidget() {
  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0">
        <CardTitle className="text-base">Selected work</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 grid-rows-2 gap-2.5 flex-1 min-h-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-black/5"
          />
        ))}
      </CardContent>
    </Card>
  )
}
