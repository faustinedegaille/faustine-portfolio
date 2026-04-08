"use client"

import { X, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"
import { motion } from "framer-motion"
import { ProjectDetailsGrid } from "./ProjectDetailsGrid"

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

export function PdfViewer({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const pdfUrl = basePath + project.pdf

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 flex flex-col bg-white/95 backdrop-blur rounded-3xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-3 md:px-vp py-2 md:py-vs shrink-0">
        <div>
          <h3 className="text-base md:text-v-lg font-semibold">{project.title}</h3>
          {project.status === "in-progress" && (
            <span className="text-xs md:text-v-xs text-black/50">En cours</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 md:gap-vs">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-black text-white text-xs md:text-v-sm font-medium rounded-full hover:bg-black/80 transition-colors"
          >
            Ouvrir le PDF
            <ExternalLink className="h-2.5 w-2.5 md:h-3 md:w-3" />
          </a>
          <button
            onClick={onClose}
            className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-black/5 bg-white/70 hover:bg-white transition-colors"
          >
            <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 px-3 md:px-vp pb-3 md:pb-vp flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden bg-black/5">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={project.title}
          />
        </div>

        {project.details && (
          <ProjectDetailsGrid details={project.details} tags={project.tags} />
        )}
      </div>
    </motion.div>
  )
}
