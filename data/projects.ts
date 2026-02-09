export type ProjectDetails = {
  context: string
  role: string
  skills: string
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  thumbnail?: string
  images?: string[]
  details?: ProjectDetails
  status?: "done" | "in-progress"
}

export const projects: Project[] = [
  {
    id: "parc-des-marais",
    title: "Parc des Marais",
    description:
      "Site vitrine réalisé dans un cadre pédagogique pour présenter le Parc des Marais.",
    tags: ["javascript", "html", "css", "ui", "responsive", "sass"],
    link: "http://mmi23g08.sae301dev.ovh/",
    thumbnail: "/projects/parc-des-marais.png",
    images: ["/projects/parc-des-marais.png"],
    details: {
      context:
        "Projet réalisé dans le cadre de la formation MMI. Un site vitrine pour présenter le Parc des Marais, ses activités et ses informations pratiques.",
      role: "Développeuse front-end et intégratrice. Réalisation de l'intégration complète du site à partir des maquettes.",
      skills:
        "Intégration HTML/CSS avec Sass. Développement JavaScript pour les interactions. Design responsive et optimisation UI.",
    },
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
    images: ["/projects/bookmood.png"],
    details: {
      context:
        "Projet réalisé sur mon temps personnel pour découvrir Nuxt.js. Une application qui recommande des livres en fonction de l'humeur sélectionnée par l'utilisateur.",
      role: "Développeuse front-end sur ce projet. Intégration des maquettes et développement des fonctionnalités de recommandation. ",
      skills:
        "Développement avec Nuxt.js et gestion d'état. Intégration responsive et optimisation des performances.",
    },
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
    details: {
      context:
        "Projet réalisé en alternance chez Altermaker. Un logiciel pour mesurer l'impact environnemental de producteurs de cidre, calvados et produits similaires.",
      role: "Unique développeuse front-end et web designer. Conception de l'identité visuelle et des maquettes, puis développement complet de l'interface.",
      skills:
        "Autonomie et prise de décision au quotidien. Travail collaboratif via pull requests avec code review systématique.",
    },
    status: "in-progress",
  },
]
