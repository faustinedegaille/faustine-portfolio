"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, MapPin } from "lucide-react"

type Experience = {
  year: string
  title: string
  location: string
  description: string
  type: "education" | "work"
  current?: boolean
  tags?: string[]
}

const experiences: Experience[] = [
  {
    year: "Sept. 2024 - Présent",
    title: "Développeuse front-end en alternance",
    location: "Altermaker · Troyes",
    description: "Conception UI/UX et développement d'un logiciel de mesure d'impact environnemental pour producteurs cidricoles.",
    type: "work",

    current: true,
    tags: ["Next.js", "TypeScript", "Figma"],
  },
  {
    year: "2023 - Présent",
    title: "BUT MMI · Développement web",
    location: "IUT de Troyes",
    description: "Formation en alternance axée sur le développement front-end et le design d'interfaces.",
    type: "education",
    current: true,
  },
  {
    year: "Été 2021 & 2022",
    title: "Kode With Klossy",
    location: "Programme américain",
    description: "Camp d'été intensif pour femmes en tech. Initiation au développement web et mobile.",
    type: "work",
    tags: ["HTML/CSS", "JavaScript"],
  },
  {
    year: "2021 - 2023",
    title: "Licence Mathématiques",
    location: "Université de Valenciennes",
    description: "L1 & L2 · Bases solides en logique et résolution de problèmes.",
    type: "education",
  },
]

export function ExperienceWidget() {
  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0 pb-2 md:px-vp md:py-vg md:pb-vs">
        <CardTitle className="text-base md:text-v-title">Parcours</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 overflow-y-auto pb-2 md:pb-vs">
        <div className="relative">
          {/* Ligne de timeline */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-black/10" />

          <div className="space-y-3 md:space-y-vs">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-2 md:gap-vs">
                {/* Point de timeline */}
                <div className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white ${
                  exp.current
                    ? "bg-emerald-500 text-white"
                    : exp.type === "work"
                    ? "bg-violet-100 text-violet-600"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {exp.type === "work" ? (
                    <Briefcase className="h-3 w-3" />
                  ) : (
                    <GraduationCap className="h-3 w-3" />
                  )}
                </div>

                <div className="flex-1 min-w-0 pb-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-2">
                    <div className="min-w-0">
                      <p className="text-xs md:text-v-sm font-semibold text-black/85 leading-tight">{exp.title}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3 text-black/30 shrink-0" />
                        <p className="text-[10px] md:text-v-2xs text-black/50 truncate">{exp.location}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] md:text-v-2xs font-medium px-1.5 md:px-2 py-0.5 rounded-full shrink-0 w-fit ${
                      exp.current
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-black/5 text-black/40"
                    }`}>
                      {exp.year}
                    </span>
                  </div>

                  <p className="text-[10px] md:text-v-2xs text-black/60 mt-1 leading-relaxed line-clamp-3 md:line-clamp-none">{exp.description}</p>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 bg-black/5 text-black/50 text-[8px] md:text-v-2xs font-medium rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
