"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Image from "next/image";

const TOTAL_SLOTS = 4;

type SelectedWorkWidgetProps = {
  onProjectClick?: (project: Project) => void;
};

export function SelectedWorkWidget({
  onProjectClick,
}: SelectedWorkWidgetProps) {
  const projectsWithThumbnail = projects.filter(
    (p): p is Project & { thumbnail: string } => !!p.thumbnail,
  );
  const displayedProjects = projectsWithThumbnail.slice(0, TOTAL_SLOTS);
  const placeholdersCount = Math.max(TOTAL_SLOTS - displayedProjects.length, 0);

  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardHeader className="shrink-0">
        <CardTitle className="text-base">Selected work</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 grid-rows-2 gap-2.5 flex-1 min-h-0">
        {displayedProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectClick?.(project)}
            className="group relative overflow-hidden rounded-2xl bg-black/5 text-left"
          >
            <div className="relative h-full w-full">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

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
          <div key={i} className="rounded-2xl bg-black/5" />
        ))}
      </CardContent>
    </Card>
  );
}
