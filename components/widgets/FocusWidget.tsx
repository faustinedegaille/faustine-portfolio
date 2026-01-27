"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TOTAL_SLOTS = 4

function ImageSlider({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = project.images || []
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 flex flex-col bg-white/95 backdrop-blur rounded-3xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <div>
          <h3 className="text-base font-semibold">{project.title}</h3>
          {project.status === "in-progress" && (
            <span className="text-xs text-black/50">En cours</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {images.length > 1 ? (
            <>
              <span className="text-xs text-black/50">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={goToPrevious}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full hover:bg-black/80 transition-colors"
            >
              Voir le projet
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : null}
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 px-4 pb-4 flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex items-start justify-center relative pt-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${project.title} - ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 py-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-4 bg-black/60"
                    : "w-1.5 bg-black/20 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        )}

        {project.details && (
          <div className="shrink-0 border-t border-black/5 pt-4 overflow-y-auto max-h-64">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium uppercase tracking-wide text-black/40">Contexte</span>
                </div>
                <p className="text-black/70">{project.details.context}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-medium uppercase tracking-wide text-black/40">Mon rôle</span>
                </div>
                <p className="text-black/70">{project.details.role}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-black/5 rounded-full text-xs font-medium capitalize">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-xs font-medium uppercase tracking-wide text-black/40">Compétences</span>
                </div>
                <p className="text-black/70">{project.details.skills}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

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
            <button
              key={project.id}
              onClick={(e) => handleProjectClick(project, e)}
              className="group relative overflow-hidden rounded-xl bg-black/5 text-left"
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

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent px-2.5 py-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <p className="text-[11px] font-medium text-white leading-tight">
                  {project.title}
                </p>
              </div>

              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </button>
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
