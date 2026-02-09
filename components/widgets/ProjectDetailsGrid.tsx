import type { ProjectDetails } from "@/data/projects"

export function ProjectDetailsGrid({
  details,
  tags,
}: {
  details: ProjectDetails
  tags: string[]
}) {
  return (
    <div className="shrink-0 border-t border-black/5 pt-2 sm:pt-3 md:pt-vg overflow-y-auto max-h-36 sm:max-h-48 md:max-h-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-vg text-xs md:text-v-sm">
        <div className="space-y-1 md:space-y-vs">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] md:text-v-2xs font-medium uppercase tracking-wide text-black/40">Contexte</span>
          </div>
          <p className="text-black/70 text-[11px] md:text-v-xs">{details.context}</p>
        </div>

        <div className="space-y-1 md:space-y-vs">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-[10px] md:text-v-2xs font-medium uppercase tracking-wide text-black/40">Mon rôle</span>
          </div>
          <p className="text-black/70 text-[11px] md:text-v-xs">{details.role}</p>
          <div className="flex flex-wrap gap-1 md:gap-vs pt-1">
            {tags.map((tag) => (
              <span key={tag} className="px-1.5 md:px-2 py-0.5 bg-black/5 rounded-full text-[10px] md:text-v-2xs font-medium capitalize">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1 md:space-y-vs">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <span className="text-[10px] md:text-v-2xs font-medium uppercase tracking-wide text-black/40">Compétences</span>
          </div>
          <p className="text-black/70 text-[11px] md:text-v-xs">{details.skills}</p>
        </div>
      </div>
    </div>
  )
}
