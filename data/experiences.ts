export type Experience = {
  year: string
  title: string
  location: string
  description: string
  type: "education" | "work"
  current?: boolean
  tags?: string[]
}

export const experiences: Experience[] = [
  {
    year: "Sept. 2024 - Présent",
    title: "Développeuse front-end en alternance",
    location: "Altermaker · Troyes",
    description: "Conception UI/UX et développement d'un logiciel de mesure d'impact environnemental pour producteurs cidricoles.",
    type: "work",
    current: true,
    tags: ["Next.js", "TypeScript", "Figma"],
  },
  {
    year: "2023 - Présent",
    title: "BUT MMI · Développement web",
    location: "IUT de Troyes",
    description: "Formation en alternance axée sur le développement front-end et le design d'interfaces.",
    type: "education",
    current: true,
  },
  {
    year: "Été 2021 & 2022",
    title: "Kode With Klossy",
    location: "Programme américain",
    description: "Camp d'été intensif pour femmes en tech. Initiation au développement web et mobile.",
    type: "work",
    tags: ["HTML/CSS", "JavaScript"],
  },
  {
    year: "2021 - 2023",
    title: "Licence Mathématiques",
    location: "Université de Valenciennes",
    description: "L1 & L2 · Bases solides en logique et résolution de problèmes.",
    type: "education",
  },
]
