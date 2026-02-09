"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"
import { useCarousel } from "@/hooks/useCarousel"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectDetailsGrid } from "./ProjectDetailsGrid"

type ProjectWidgetProps = {
  project: Project
  onClose: () => void
}

export function ProjectWidget({ project, onClose }: ProjectWidgetProps) {
  const images = project.images || []
  const { currentIndex, goToPrevious, goToNext, goTo } = useCarousel(images.length)

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="flex items-center justify-between shrink-0">
        <div>
          <CardTitle className="text-base">{project.title}</CardTitle>
          {project.status === "in-progress" && (
            <span className="text-xs text-black/50">En cours</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {images.length > 1 && (
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
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full hover:bg-black/80 transition-colors"
            >
              Voir le projet
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {images.length > 0 && (
          <div className="flex-1 min-h-0 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${project.title} - ${currentIndex + 1}`}
                className="max-w-full max-h-[50vh] object-contain rounded-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>
        )}

        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 py-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
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
          <ProjectDetailsGrid details={project.details} tags={project.tags} />
        )}
      </CardContent>
    </Card>
  )
}
