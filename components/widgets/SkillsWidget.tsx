import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SiReact, SiNextdotjs, SiFigma, SiDocker, SiGithub } from "react-icons/si"

const skills = [
  { icon: SiReact, title: "React", subtitle: "Component-driven UI" },
  { icon: SiNextdotjs, title: "Next.js", subtitle: "App Router" },
  { icon: SiFigma, title: "Figma", subtitle: "UI · UX" },
  { icon: SiDocker, title: "Docker", subtitle: "Local environments" },
  { icon: SiGithub, title: "GitHub", subtitle: "Version control" },
]

export function SkillsWidget() {
  return (
    <Card className="h-full rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Compétences</CardTitle>
      </CardHeader>

      <CardContent className="h-[calc(100%-44px)] overflow-auto space-y-2">
        {skills.map((s) => (
          <div key={s.title} className="flex gap-3 rounded-xl bg-white/60 p-3">
            <s.icon className="text-lg" />
            <div>
              <p className="text-sm font-medium">{s.title}</p>
              <p className="text-[11px] text-muted-foreground">
                {s.subtitle}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
