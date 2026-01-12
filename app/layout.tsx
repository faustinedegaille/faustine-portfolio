import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faustine Degaille",
  description: "Portfolio – Développeuse front-end & web designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
