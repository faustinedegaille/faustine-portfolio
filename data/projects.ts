export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  thumbnail?: string
  images?: string[]
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
  {
    id: "bookmood",
    title: "BookMood",
    description:
      "Application de recommandation de livres basée sur l'humeur de l'utilisateur.",
    tags: ["nuxt", "typescript", "tailwind"],
    link: "http://mmi23h04.mmi-troyes.fr/portfolio/bookmood/",
    thumbnail: "/projects/bookmood.png",
    status: "done",
  },
  {
    id: "questionnaire-app",
    title: "Application Questionnaire",
    description:
      "Application de création et gestion de questionnaires.",
    tags: ["next.js", "typescript", "tailwind"],
    thumbnail: "/projects/creation-projet.PNG",
    images: [
      "/projects/creation-projet.PNG",
      "/projects/projects-card.PNG",
      "/projects/questionnaire.PNG",
      "/projects/questionnaire-NSP.PNG",
    ],
    status: "in-progress",
  },
]
  
