"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SiInstagram, SiTiktok } from "react-icons/si"
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
          {skill === "influence-litteraire" ? "Influence littéraire" : `Projets · ${skill}`}
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
      <CardContent className={`flex-1 min-h-0 flex ${skill === "influence-litteraire" || skill === "canva" ? "overflow-y-auto items-start" : "overflow-hidden items-center justify-center"}`}>
        {skill === "canva" ? (
          <div className="w-full flex flex-col gap-4">
            <div className="rounded-xl border border-black/8 bg-white px-5 py-4 flex flex-col gap-2">
              <p className="text-[11px] font-medium text-black/35 uppercase tracking-widest">Démarche & création</p>
              <p className="text-sm text-black/60 leading-relaxed">
                J'utilise Canva pour créer l'ensemble des visuels de mon compte littéraire <span className="font-medium text-black">@books_by_fau</span>. Chaque publication est pensée avec une direction artistique propre à l'univers du livre présenté — palette, typographie et mise en scène cohérentes avec le genre littéraire. Je crée trois formats récurrents : des <span className="font-medium text-black/80">moodboards aesthetics</span> qui traduisent l'ambiance d'un livre, des <span className="font-medium text-black/80">revues annotées</span> qui présentent mon avis de façon graphique, et des <span className="font-medium text-black/80">carousels d'univers</span> avec slides de présentation et posts characters. Ce travail m'a appris à construire une identité visuelle de compte, à maintenir une ligne éditoriale cohérente et à créer du storytelling visuel.
              </p>
            </div>
            <div className="columns-3 sm:columns-4 gap-2 space-y-2">
              {[
                "/projects/Better%20than%20the%20movies%20aesthetic.png",
                "/projects/Revue%20Damnatis.png",
                "/projects/UPPTS%20characters%E2%80%99%20Instagrams.png",
                "/projects/BTM-slide1.png",
                "/projects/Tempted%20revue.png",
                "/projects/UPPTS-slide1.png",
                "/projects/Aesthetic%20damnatis.png",
                "/projects/Breathe%20avis.png",
                "/projects/Breathe%20characters%E2%80%99%20Instagrams.png",
                "/projects/tempted%20aesthetic.png",
                "/projects/Hope%20avis%20.png",
                "/projects/tempted%20slide%201.png",
                "/projects/december.png",
                "/projects/Nos%20%C3%A2mes%20consum%C3%A9es.png",
                "/projects/damniatis-slide1.png",
                "/projects/Nouveau%20livre%20aesthetic.jpg",
                "/projects/Les%20yeux%20verts.png",
                "/projects/NV-slide1.png",
                "/projects/hope-slide1.png",
                "/projects/chained.png",
              ].map((src, i) => (
                <div key={i} className="relative w-full overflow-hidden rounded-lg break-inside-avoid">
                  <Image src={src} alt="" width={400} height={400} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        ) : skill === "influence-litteraire" ? (
          <div className="w-full h-full flex flex-col gap-5">

            {/* Top : texte + podcast */}
            <div className="grid grid-cols-5 gap-3 shrink-0">
              <div className="col-span-3 rounded-xl border border-black/8 bg-white px-5 py-4 flex flex-col gap-2">
                <p className="text-[11px] font-medium text-black/35 uppercase tracking-widest">Démarche & réseaux</p>
                <p className="text-sm text-black/60 leading-relaxed">
                  Depuis <span className="font-medium text-black">janvier 2023</span>, je construis une présence littéraire sur Instagram et TikTok autour d'une identité visuelle forte et cohérente. J'accorde autant d'importance au visuel qu'au contenu — chaque publication est pensée pour être cohérente avec l'univers du livre présenté. Ce projet m'a appris à gérer une ligne éditoriale, à négocier avec des maisons d'édition et à développer une sensibilité entre création de contenu et storytelling visuel.
                </p>
              </div>
              <div className="col-span-2 rounded-xl border border-black/8 bg-white px-4 py-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 rounded-xl overflow-hidden shrink-0">
                    <Image src="/projects/Coin%20lecture.png" alt="Coin Lecture" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">Coin Lecture</p>
                    <span className="text-[10px] text-black/40">Podcast</span>
                  </div>
                </div>
                <p className="text-xs text-black/55 leading-relaxed">
                  En parallèle de mes réseaux, j'ai lancé un podcast autour de la lecture. Il est en pleine refonte — nouvelle identité, nouveau format — les épisodes seront de nouveau disponibles prochainement.
                </p>
              </div>
            </div>

            {/* Partenariats */}
            <div className="shrink-0">
              <p className="text-[11px] font-medium text-black/35 uppercase tracking-widest mb-2.5">Partenariats annuels</p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "Adonia", logo: "/projects/adonia.webp" },
                  { name: "Albin Michel Stories", logo: "/projects/albinmichel.png" },
                  { name: "Comet", logo: "/projects/comet.webp" },
                  { name: "Vibes Poche", logo: "/projects/vibes-poche.jpg" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="relative group rounded-xl border border-black/8 bg-white px-3 py-4 flex items-center justify-center"
                  >
                    <div className="relative h-11 w-full">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grille Instagram */}
            <div className="rounded-xl border border-black/8 overflow-hidden bg-white flex flex-col flex-1 min-h-0">
              {/* Chrome Instagram */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-black/6">
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-px shrink-0">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                      <SiInstagram className="h-2.5 w-2.5" />
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold">books_by_fau</span>
                </div>
                <a
                  href="https://www.instagram.com/books_by_fau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-black/40 hover:text-black/70 transition-colors"
                >
                  Voir le profil ↗
                </a>
              </div>
              {/* Grille 3×2 avec hauteur fixe */}
              <div className="overflow-y-auto flex-1 min-h-0">
                <div className="grid grid-cols-4 gap-px bg-black/8">
                  {[
                    "/projects/tempted%20slide%201.png",
                    "/projects/Tempted%20revue.png",
                    "/projects/damniatis-slide1.png",
                    "/projects/Revue%20Damnatis.png",
                    "/projects/Nos%20%C3%A2mes%20consum%C3%A9es.png",
                    "/projects/NV-slide1.png",
                    "/projects/Hope%20avis%20.png",
                    "/projects/hope-slide1.png",
                    "/projects/Les%20yeux%20verts.png",
                    "/projects/UPPTS%20characters%E2%80%99%20Instagrams.png",
                    "/projects/UPPTS-slide1.png",
                    "/projects/Breathe%20characters%E2%80%99%20Instagrams.png",
                  ].map((src, i) => (
                    <div key={i} className="relative aspect-square bg-black/5">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div className="flex items-center gap-2 mt-auto shrink-0">
              <a
                href="https://www.instagram.com/books_by_fau/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-medium hover:bg-black/5 transition-colors"
              >
                <SiInstagram className="h-3.5 w-3.5" />
                @books_by_fau
              </a>
              <a
                href="https://www.tiktok.com/@books_by_fau"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-medium hover:bg-black/5 transition-colors"
              >
                <SiTiktok className="h-3.5 w-3.5" />
                @books_by_fau
              </a>
            </div>

          </div>
        ) : count === 0 ? (
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

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent px-2 md:px-2.5 py-1.5 md:py-2">
                  <p className="text-xs md:text-v-xs font-medium text-white leading-tight">
                    {project.title}
                  </p>
                </div>

                <div className="absolute right-1.5 top-1.5 md:right-2 md:top-2 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-200 group-hover:scale-110">
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
