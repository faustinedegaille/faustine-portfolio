"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ImageSlider } from "./ImageSlider"
import { PdfViewer } from "./PdfViewer"
import { PdfThumbnail } from "./PdfThumbnail"

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

  const count = filtered.length
  const cols = count === 1 ? 1 : 2
  const rows = count === 1 ? 1 : Math.ceil(count / 2)

  const [selectedProject, setSelectedProject] = useState<Project | null>(
    filtered.length === 1 ? filtered[0] : null
  )

  const openSlider = (project: Project) => {
    setSelectedProject(project)
  }

  const closeSlider = () => {
    setSelectedProject(null)
  }

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault()
    if (project.images && project.images.length > 0) {
      openSlider(project)
    } else if (project.pdf) {
      openSlider(project)
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden relative">
      <AnimatePresence>
        {selectedProject && selectedProject.pdf ? (
          <PdfViewer
            project={selectedProject}
            onClose={closeSlider}
          />
        ) : selectedProject ? (
          <ImageSlider
            project={selectedProject}
            onClose={closeSlider}
          />
        ) : null}
      </AnimatePresence>

      <CardHeader className="flex items-center justify-between shrink-0 md:px-vp md:py-vg">
        <CardTitle className="text-lg md:text-v-title">
          Projets · {skill}
        </CardTitle>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70"
        >
          <X className="h-4 w-4" />
        </button>
      </CardHeader>

      {skill === "figma" && (
        <div className="shrink-0 mx-4 md:mx-vp mb-2 rounded-xl bg-black/5 px-3 py-2 text-xs md:text-v-xs text-black/60 leading-snug">
          Tous les projets de développement web réalisés en entreprise présents existent également sous forme de maquettes Figma et je suis la webdesigner qui les a conçues avant des les intégrer.
        </div>
      )}
      <CardContent className="flex-1 min-h-0 overflow-hidden flex items-center justify-center">
        {count === 0 ? (
          <div className="relative w-full h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-vg h-full blur-md pointer-events-none select-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-black/10 to-black/5" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm md:text-v-sm text-black/50 text-center px-6 font-medium">
                Plusieurs projets ont été réalisés avec cet outil. Ils seront disponibles ici très prochainement !
              </p>
            </div>
          </div>
        ) : (
        <div
          className={`grid gap-2 md:gap-vg w-full ${count > 2 ? "h-full" : ""}`}
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            ...(count > 2 ? { gridTemplateRows: `repeat(${rows}, 1fr)` } : {}),
          }}
        >
          {filtered.map((project) => {
            const thumbnailSrc = project.thumbnail
            return (
              <button
                key={project.id}
                onClick={(e) => handleProjectClick(project, e)}
                className={`group relative overflow-hidden rounded-xl bg-black/5 text-left w-full min-h-28 sm:min-h-36 ${count > 2 ? "h-full" : "aspect-video"}`}
              >
                {thumbnailSrc ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={thumbnailSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : project.pdf ? (
                  <PdfThumbnail url={project.pdf} />
                ) : (
                  <div className="h-full w-full bg-black/10" />
                )}

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent px-2 md:px-2.5 py-1.5 md:py-2 md:opacity-0 transition-opacity duration-200 md:group-hover:opacity-100">
                  <p className="text-xs md:text-v-xs font-medium text-white leading-tight">
                    {project.title}
                  </p>
                </div>

                <div className="absolute right-1.5 top-1.5 md:right-2 md:top-2 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-white/90 text-black md:opacity-0 transition-opacity duration-200 md:group-hover:opacity-100">
                  <ArrowUpRight className="h-2.5 w-2.5 md:h-3 md:w-3" />
                </div>
              </button>
            )
          })}
        </div>
        )}
      </CardContent>
    </Card>
  )
}
