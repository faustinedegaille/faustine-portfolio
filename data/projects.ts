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
  pdf?: string
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
    id: "portfolio",
    title: "Portfolio Personnel",
    description:
      "Portfolio interactif présentant mes projets et compétences avec des animations fluides et un design bento.",
    tags: ["next.js", "typescript", "tailwind", "framer-motion"],
    thumbnail: "/projects/portfolio.png",
    images: ["/projects/portfolio.png"],
    details: {
      context:
        "Projet personnel. Conception et développement de mon portfolio pour présenter mes projets, compétences et parcours dans un format bento moderne et interactif.",
      role: "Développeuse front-end et web designer. Conception complète du design, de l'architecture et du développement.",
      skills:
        "Layout bento responsive, animations Framer Motion, composants dynamiques, filtrage de projets par compétence.",
    },
    status: "in-progress",
  },
  {
    id: "questionnaire-app",
    title: "Application Questionnaire",
    description:
      "Application de création et gestion de questionnaires.",
    tags: ["next.js", "typescript", "tailwind", "figma"],
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
      role: "Web designer du projet. Concevoir des maquettes accessibles pour des utilisateurs non techniques — peu familiers des données complexes de l'ACV — a représenté un vrai défi de vulgarisation visuelle et d'UX.",
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
    link: "http://mmi23h04.mmi-troyes.fr/portfolio/recipe-app/",
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
    link: "http://mmi23h04.mmi-troyes.fr/portfolio/dice-rolling/",
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
    link: "http://mmi23h04.mmi-troyes.fr/portfolio/github-explorer/",
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
  {
    id: "figma-asker",
    title: "Asker — Maquettes Figma",
    description:
      "Maquettes Figma de l'application Asker, outil de création et gestion de questionnaires.",
    tags: ["figma", "ui", "ux"],
    pdf: "/projects/Figma-Asker.pdf",
    details: {
      context:
        "Réalisé en alternance chez Altermaker.",
      role: "Web designer. Conception de l'identité visuelle, du design system et de l'ensemble des maquettes (desktop et responsive) avant le développement.",
      skills:
        "Design system Figma, maquettage responsive, prototypage interactif, UX/UI, composants Figma réutilisables.",
    },
    status: "done",
  },
  {
    id: "figma-parc-des-marais",
    title: "Parc des Marais — Maquettes Figma",
    description:
      "Maquettes Figma du site vitrine du Parc des Marais, réalisées dans le cadre de la formation MMI à l'IUT.",
    tags: ["figma", "ui", "ux"],
    pdf: "/projects/Figma%20-%20Parc%20des%20marais.pdf",
    details: {
      context:
        "Réalisé dans le cadre de la formation MMI à l'IUT de Troyes. Conception des maquettes Figma du site vitrine du Parc des Marais avant l'intégration HTML/CSS/JS. Le projet couvrait l'ensemble des pages du site : accueil, activités, informations pratiques.",
      role: "Web designer. Conception graphique complète du site, de la charte visuelle aux maquettes desktop et mobile, en passant par le prototypage des interactions.",
      skills:
        "Maquettage Figma, design UI responsive, prototypage, charte graphique, accessibilité visuelle.",
    },
    status: "done",
  },
  {
    id: "recette-finale",
    title: "Recette illustrée",
    description:
      "Illustration d'une recette de cuisine réalisée avec Adobe Illustrator dans le cadre d'un projet de cours.",
    tags: ["adobe"],
    pdf: "/projects/recette%20finale.pdf",
    details: {
      context:
        "Projet de cours à l'IUT de Troyes. L'objectif était d'illustrer une recette de cuisine de façon graphique et soignée en utilisant Adobe Illustrator.",
      role: "Illustratrice. Conception graphique complète de la recette, du choix des couleurs à la mise en page finale.",
      skills:
        "Illustration vectorielle, mise en page, Adobe Illustrator.",
    },
    status: "done",
  },
  {
    id: "figma-sonomagic",
    title: "Sonomagic — Maquettes Figma",
    description:
      "Maquettes Figma de Sonomagic, une application de gestion sonore conçue pour une professeure des écoles.",
    tags: ["figma", "ui", "ux"],
    pdf: "/projects/Figma-%20Sonomagic.pdf",
    details: {
      context:
        "Projet personnel réalisé à la demande d'une professeure des écoles. Conception d'une application permettant de gérer et déclencher des sons ou musiques en classe (fond sonore, signaux, ambiances). L'objectif était de créer une interface simple, intuitive et accessible pour une utilisation quotidienne en contexte scolaire.",
      role: "Web designer. Conception complète de l'interface, de l'expérience utilisateur et du prototypage de l'application.",
      skills:
        "UX research, maquettage Figma, design d'interface applicative, accessibilité, prototypage interactif.",
    },
    status: "done",
  },
  {
    id: "content-canva",
    title: "Posts aesthetic",
    description: "Moodboards et visuels aesthetic conçus avec Canva pour @books_by_fau.",
    tags: ["canva"],
    thumbnail: "/projects/Better%20than%20the%20movies%20aesthetic.png",
    images: [
      "/projects/Better%20than%20the%20movies%20aesthetic.png",
      "/projects/BTM-slide1.png",
      "/projects/Aesthetic%20damnatis.png",
      "/projects/tempted%20aesthetic.png",
      "/projects/december.png",
      "/projects/Nouveau%20livre%20aesthetic.jpg",
    ],
    details: {
      context: "Posts aesthetic conçus pour @books_by_fau sur Instagram et TikTok. Chaque visuel traduit l'ambiance et l'univers d'un livre à travers un moodboard graphique — palette de couleurs, typographie et mise en scène cohérentes avec le genre littéraire.",
      role: "Créatrice de contenu. Sélection des visuels, direction artistique, composition et choix typographiques sur Canva.",
      skills: "Canva, direction artistique, moodboard, cohérence visuelle, identité de compte.",
    },
    status: "done",
  },
  {
    id: "reviews-canva",
    title: "Revues de livres",
    description: "Visuels de revues et avis de lecture réalisés avec Canva.",
    tags: ["canva"],
    thumbnail: "/projects/Revue%20Damnatis.png",
    images: [
      "/projects/Revue%20Damnatis.png",
      "/projects/Tempted%20revue.png",
      "/projects/Breathe%20avis.png",
      "/projects/Hope%20avis%20.png",
      "/projects/Nos%20%C3%A2mes%20consum%C3%A9es.png",
      "/projects/Les%20yeux%20verts.png",
    ],
    details: {
      context: "Visuels de revues conçus pour @books_by_fau : chaque post présente mon avis de lecture de façon graphique, avec photo du livre, annotations manuscrites et mise en page soignée.",
      role: "Créatrice de contenu. Conception des templates de revues, mise en page, annotations et direction artistique.",
      skills: "Canva, mise en page, typographie, création de templates réutilisables.",
    },
    status: "done",
  },
  {
    id: "slides-canva",
    title: "Slides & univers",
    description: "Carousels et posts 'characters' Instagram' conçus avec Canva.",
    tags: ["canva"],
    thumbnail: "/projects/UPPTS%20characters%E2%80%99%20Instagrams.png",
    images: [
      "/projects/UPPTS%20characters%E2%80%99%20Instagrams.png",
      "/projects/UPPTS-slide1.png",
      "/projects/Breathe%20characters%E2%80%99%20Instagrams.png",
      "/projects/tempted%20slide%201.png",
      "/projects/damniatis-slide1.png",
      "/projects/NV-slide1.png",
      "/projects/hope-slide1.png",
      "/projects/chained.png",
    ],
    details: {
      context: "Formats de carousels et posts 'univers' conçus pour @books_by_fau : slides de présentation, 'characters' Instagram' simulant les profils fictifs des personnages, et premières de couverture mises en scène.",
      role: "Créatrice de contenu. Conception des formats de slides, mise en scène des univers littéraires et création des posts characters.",
      skills: "Canva, conception de carousels, storytelling visuel, formats multi-slides.",
    },
    status: "done",
  },
]
