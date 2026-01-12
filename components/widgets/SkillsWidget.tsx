import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiAdobe,
  SiDocker,
  SiGithub,
  SiSass,
  SiTailwindcss,
} from "react-icons/si"

const skills = [
  { icon: SiReact, title: "React", subtitle: "Component-driven UI" },
  { icon: SiNextdotjs, title: "Next.js", subtitle: "App Router" },
  { icon: SiVuedotjs, title: "Vue.js", subtitle: "Reactive UI" },
  { icon: SiNuxtdotjs, title: "Nuxt", subtitle: "Vue framework" },
  { icon: SiJavascript, title: "JavaScript", subtitle: "ES6+" },
  { icon: SiTypescript, title: "TypeScript", subtitle: "Typed JavaScript" },
  { icon: SiSass, title: "Sass", subtitle: "CSS preprocessor" },
  { icon: SiTailwindcss, title: "Tailwind CSS", subtitle: "Utility-first CSS" },
  { icon: SiFigma, title: "Figma", subtitle: "UI · UX" },
  { icon: SiAdobe, title: "Adobe Suite", subtitle: "Design & motion" },
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
          <div
            key={s.title}
            className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_1px_6px_rgba(0,0,0,0.06)]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
              <s.icon className="text-base" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{s.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                {s.subtitle}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
