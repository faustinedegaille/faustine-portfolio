import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function SelectedWorkWidget() {
  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Selected work</CardTitle>
      </CardHeader>

      <CardContent className="grid h-[calc(100%-44px)] grid-cols-2 gap-3 overflow-auto">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="aspect-[5/2.25] rounded-2xl bg-black/4"
          />
        ))}
      </CardContent>
    </Card>
  )
}
