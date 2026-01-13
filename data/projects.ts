export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  thumbnail?: string
  status?: "done" | "in-progress"
}

export const projects: Project[] = [
  {
    id: "parc-des-marais",
    title: "Parc des Marais",
    description:
      "Site vitrine réalisé dans un cadre pédagogique pour présenter le Parc des Marais.",
    tags: ["javascript", "html", "css", "ui", "responsive", "sass"],
    thumbnail: "/projects/parc-des-marais.png",
    status: "done",
  },
]
  
