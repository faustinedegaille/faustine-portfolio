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
        "Intégration pixel-perfect depuis maquettes, animations JS custom, adaptation mobile.",
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
        "Routing dynamique, gestion d'état pour le système de recommandation, composants réutilisables.",
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
      role: "Développeuse front-end principale et web designer. Conception de l'identité visuelle et des maquettes, puis développement complet de l'interface.",
      skills:
        "Création de formulaires dynamiques, conception UI/UX complète, code review via pull requests.",
    },
    status: "in-progress",
  },
  {
    id: "recipe-hub",
    title: "RecipeHub",
    description:
      "Application de découverte de recettes avec recherche, filtres et favoris.",
    tags: ["next.js", "typescript", "tailwind", "api rest"],
    thumbnail: "/projects/recipe-app.png",
    images: ["/projects/recipe-app.png"],
    details: {
      context:
        "Projet d'entraînement. Application de découverte culinaire permettant de rechercher des recettes par nom ou ingrédient, de les filtrer par catégorie et de sauvegarder ses favoris.",
      role: "Développeuse front-end. Conception de l'architecture, intégration de l'API externe et développement de l'ensemble des fonctionnalités.",
      skills:
        "Connexion à une API externe, custom hooks pour la gestion d'état, architecture composants.",
    },
    status: "done",
  },
  {
    id: "dice-roller",
    title: "Dice Roller 3D",
    description:
      "Simulateur de lancé de dés en 3D avec animations réalistes et scène interactive.",
    tags: ["typescript", "threejs", "gsap", "vite"],
    link: "https://example.com/dice-roller",
    thumbnail: "/projects/dice.png",
    images: ["/projects/dice.png"],
    details: {
      context:
        "Projet personnel pour explorer la programmation 3D avec Three.js. Une application permettant de lancer 1 à 4 dés avec des animations de rebond réalistes dans une scène WebGL interactive.",
      role: "Développeuse front-end. Conception de la scène 3D, génération procédurale des textures de dés via Canvas 2D, et animations GSAP.",
      skills:
        "Scène 3D interactive, génération procédurale de textures, animations physiques réalistes.",
    },
    status: "done",
  },
  {
    id: "github-explorer",
    title: "GitHub Explorer Pro",
    description:
      "Plateforme d'exploration GitHub : recherche de repositories et développeurs, statistiques, tendances et favoris.",
    tags: ["nuxt", "typescript", "sass", "api rest", "chartjs"],
    link: "https://example.com/github-explorer",
    thumbnail: "/projects/github-explorer.png",
    images: ["/projects/github-explorer.png"],
    details: {
      context:
        "Projet d'entraînement. Plateforme d'exploration GitHub permettant de rechercher des repositories et développeurs, consulter des statistiques détaillées, suivre les tendances et gérer une liste de favoris.",
      role: "Développeuse front-end. Conception de l'architecture Nuxt 3, intégration de l'API GitHub via Octokit, système de design Sass et visualisations Chart.js.",
      skills:
        "Consommation multi-endpoints API GitHub, data visualization, theming dark/light.",
    },
    status: "done",
  },
]
