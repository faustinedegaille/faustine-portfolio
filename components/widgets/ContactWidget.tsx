import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ArrowUpRight } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"

export function ContactWidget() {
  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Contact</CardTitle>
      </CardHeader>

      <CardContent className="h-[calc(100%-44px)] flex flex-col gap-4">
        <a
          href="mailto:faustinedegaille59@gmail.com"
          className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/60 p-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/70">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium">
              faustinedegaille59@gmail.com
            </p>
          </div>
        </a>

        <div className="grid grid-cols-2 gap-3 flex-1">
          <a
            href="https://github.com/faustinedegaille"
            target="_blank"
            className="relative flex flex-col justify-between rounded-2xl bg-black p-4 text-white"
          >
            <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black">
              <ArrowUpRight className="h-4 w-4" />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
              <SiGithub className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-sm font-semibold">GitHub</p>
              <p className="text-xs text-white/70">@faustinedegaille</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/faustine-degaille"
            target="_blank"
            className="relative flex flex-col justify-between rounded-2xl bg-[#3b82c4] p-4 text-white"
          >
            <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black">
              <ArrowUpRight className="h-4 w-4" />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
              <SiLinkedin className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-sm font-semibold">LinkedIn</p>
              <p className="text-xs text-white/80">faustine-degaille</p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
