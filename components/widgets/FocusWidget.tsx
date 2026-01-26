"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"

const TOTAL_SLOTS = 4

export function FocusWidget({
  skill,
  onClose,
}: {
  skill: string
  onClose: () => void
}) {
  const filtered: Project[] = projects.filter((p) =>
    p.tags.includes(skill)
  )

  const placeholdersCount = Math.max(
    TOTAL_SLOTS - filtered.length,
    0
  )

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="flex items-center justify-between shrink-0">
        <CardTitle className="text-base">
          Projets · {skill}
        </CardTitle>

        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70"
        >
          <X className="h-4 w-4" />
        </button>
      </CardHeader>

      <CardContent className="flex-1 min-h-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-2.5 h-full">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-black/5"
            >
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-black/10" />
              )}

              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/40 to-transparent px-2.5 py-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <p className="text-[11px] font-medium text-white leading-tight">
                  {project.title}
                </p>
              </div>

              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </a>
          ))}

          {Array.from({ length: placeholdersCount }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-black/5"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
