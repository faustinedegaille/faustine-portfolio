"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactWidget() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
        <CardHeader className="shrink-0">
          <CardTitle className="text-lg">Contact</CardTitle>
        </CardHeader>

<CardContent className="flex flex-col gap-4 flex-1 min-h-0 overflow-auto overflow-x-hidden overflow-y-visible pt-2">
          <div className="grid grid-cols-2 gap-3">
            <SocialCard
              href="https://github.com/faustinedegaille"
              label="GitHub"
              value="@faustinedegaille"
              bg="bg-black"
              icon={<SiGithub className="h-5 w-5 text-white" />}
            />

            <SocialCard
              href="https://www.linkedin.com/in/faustine-degaille"
              label="LinkedIn"
              value="faustine-degaille"
              bg="bg-[#3b82c4]"
              icon={<SiLinkedin className="h-5 w-5 text-white" />}
            />
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <p className="text-sm font-medium">Laisser un message</p>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Nom - Prénom"
                className="h-10 rounded-xl border border-black/5 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-10 rounded-xl border border-black/5 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <textarea
              placeholder="Votre message…"
              className="min-h-[80px] rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-black/10"
            />

            <Button className="mt-1 h-10 rounded-full text-sm">
              Envoyer le message
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SocialCard({
  href,
  label,
  value,
  bg,
  icon,
}: {
  href: string
  label: string
  value: string
  bg: string
  icon: React.ReactNode
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative flex flex-col justify-between rounded-2xl p-4 text-white ${bg}`}
    >
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-black">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-white/75">{value}</p>
      </div>
    </motion.a>
  )
}
