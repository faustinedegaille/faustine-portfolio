"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, FileText } from "lucide-react"

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/faustine-degaille",
    color: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/faustinedegaille",
    color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  },
  {
    icon: FileText,
    label: "CV",
    href: "/cv.pdf",
    color: "bg-emerald-100 text-emerald-600 hover:bg-emerald-200",
  },
]

export function LinksWidget() {
  return (
    <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
      <CardContent className="flex-1 min-h-0 flex items-center justify-center gap-3 p-4 overflow-y-auto">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${link.color}`}
            title={link.label}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </CardContent>
    </Card>
  )
}
