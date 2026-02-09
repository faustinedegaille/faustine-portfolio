"use client"

import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"
import { useCarousel } from "@/hooks/useCarousel"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ProjectDetailsGrid } from "./ProjectDetailsGrid"

export function ImageSlider({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const images = project.images || []
  const { currentIndex, goToPrevious, goToNext, goTo } = useCarousel(images.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 flex flex-col bg-white/95 backdrop-blur rounded-3xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-3 md:px-vp py-2 md:py-vs shrink-0">
        <div>
          <h3 className="text-sm md:text-v-base font-semibold">{project.title}</h3>
          {project.status === "in-progress" && (
            <span className="text-[10px] md:text-v-2xs text-black/50">En cours</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 md:gap-vs">
          {images.length > 1 ? (
            <>
              <span className="text-[10px] md:text-v-2xs text-black/50">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={goToPrevious}
                className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>
              <button
                onClick={goToNext}
                className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>
            </>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-black text-white text-[10px] md:text-v-2xs font-medium rounded-full hover:bg-black/80 transition-colors"
            >
              Voir le projet
              <ExternalLink className="h-2.5 w-2.5 md:h-3 md:w-3" />
            </a>
          ) : null}
          <button
            onClick={onClose}
            className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
          >
            <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 px-3 md:px-vp pb-3 md:pb-vp flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-full h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={images[currentIndex]}
                alt={`${project.title} - ${currentIndex + 1}`}
                fill
                className="object-contain rounded-xl md:rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 py-2 md:py-vs">
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
      </div>
    </motion.div>
  )
}
