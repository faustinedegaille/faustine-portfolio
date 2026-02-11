"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ImageSlider } from "./ImageSlider"

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

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openSlider = (project: Project) => {
    setSelectedProject(project)
    window.history.pushState({ slider: project.id }, "", `#${skill}/${project.id}`)
  }

  const closeSlider = () => {
    setSelectedProject(null)
    window.history.pushState({ focusSkill: skill }, "", `#${skill}`)
  }

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1)
      if (hash.includes("/")) {
        const projectId = hash.split("/")[1]
        const project = filtered.find((p) => p.id === projectId)
        if (project) {
          setSelectedProject(project)
        }
      } else {
        setSelectedProject(null)
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [filtered])

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault()
    if (project.images && project.images.length > 0) {
      openSlider(project)
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden relative">
      <AnimatePresence>
        {selectedProject && (
          <ImageSlider
            project={selectedProject}
            onClose={closeSlider}
          />
        )}
      </AnimatePresence>

      <CardHeader className="flex items-center justify-between shrink-0 md:px-vp md:py-vg">
        <CardTitle className="text-lg md:text-v-title">
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

      <CardContent className="flex-1 min-h-0 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-vg h-full">
          {filtered.map((project) => {
            const thumbnailSrc = project.thumbnail
            return (
              <button
                key={project.id}
                onClick={(e) => handleProjectClick(project, e)}
                className="group relative overflow-hidden rounded-xl bg-black/5 text-left h-full w-full min-h-28 sm:min-h-36"
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

          {Array.from({ length: placeholdersCount }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-black/5 h-full w-full min-h-28 sm:min-h-36"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
