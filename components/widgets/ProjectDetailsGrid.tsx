import type { ProjectDetails } from "@/data/projects"

export function ProjectDetailsGrid({
  details,
  tags,
}: {
  details: ProjectDetails
  tags: string[]
}) {
  return (
    <div className="shrink-0 border-t border-black/5 pt-4 sm:pt-5 md:pt-vp overflow-y-auto max-h-52 sm:max-h-64 md:max-h-80">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-vg">
        <div className="space-y-2 md:space-y-vs">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-base md:text-v-base font-medium uppercase tracking-wide text-black/40">Contexte</span>
          </div>
          <p className="text-black/70 text-base md:text-v-base leading-relaxed">{details.context}</p>
        </div>

        <div className="space-y-2 md:space-y-vs">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            <span className="text-base md:text-v-base font-medium uppercase tracking-wide text-black/40">Mon rôle</span>
          </div>
          <p className="text-black/70 text-base md:text-v-base leading-relaxed">{details.role}</p>
        </div>

        <div className="space-y-2 md:space-y-vs">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            <span className="text-base md:text-v-base font-medium uppercase tracking-wide text-black/40">Compétences</span>
          </div>
          <p className="text-black/70 text-base md:text-v-base leading-relaxed">{details.skills}</p>
          <div className="flex flex-wrap gap-1.5 md:gap-vs pt-1">
            {tags.map((tag) => (
              <span key={tag} className="px-2.5 md:px-3 py-1 bg-black/5 rounded-full text-base md:text-v-sm font-medium capitalize">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
