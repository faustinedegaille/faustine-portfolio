"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { motion } from "framer-motion"

export function ContactWidget() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="h-full flex flex-col rounded-3xl border-white/60 bg-white/70 backdrop-blur overflow-hidden">
        <CardHeader className="shrink-0 md:px-vp md:py-vg">
          <CardTitle className="text-lg md:text-v-title">Contact</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 sm:gap-3 md:gap-vg flex-1 min-h-0 pt-2 pb-3 md:pt-vs md:pb-vs overflow-hidden">
          <div className="grid grid-cols-2 gap-2 md:gap-vg flex-1">
            <SocialCard
              href="https://github.com/faustinedegaille"
              label="GitHub"
              value="@faustinedegaille"
              bg="bg-black"
              icon={<SiGithub className="h-4 w-4 md:h-5 md:w-5 text-white" />}
            />
            <SocialCard
              href="https://www.linkedin.com/in/faustine-degaille"
              label="LinkedIn"
              value="faustine-degaille"
              bg="bg-[#3b82c4]"
              icon={<SiLinkedin className="h-4 w-4 md:h-5 md:w-5 text-white" />}
            />
          </div>

          <SocialCard
            href="mailto:faustine.degaille@gmail.com"
            label="Email"
            value="faustine.degaille@gmail.com"
            bg="bg-neutral-100"
            icon={<Mail className="h-4 w-4 md:h-5 md:w-5 text-neutral-600" />}
            wide
            light
          />
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
  wide,
  light,
}: {
  href: string
  label: string
  value: string
  bg: string
  icon: React.ReactNode
  wide?: boolean
  light?: boolean
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className={`relative flex ${wide ? "flex-row items-center gap-3 shrink-0" : "flex-col justify-between h-full"} rounded-2xl p-3 md:p-vp ${light ? "text-neutral-800" : "text-white"} ${bg}`}
    >
      <div className={`absolute right-2 top-2 md:right-3 md:top-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full ${light ? "bg-neutral-800 text-white" : "bg-white/85 text-black"}`}>
        <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
      </div>

      <div className={`flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-xl ${light ? "bg-neutral-200" : "bg-white/20"} shrink-0`}>
        {icon}
      </div>

      <div>
        <p className="text-xs md:text-v-sm font-semibold">{label}</p>
        <p className={`text-[10px] md:text-v-2xs truncate ${light ? "text-neutral-500" : "text-white/75"}`}>
          {value}
        </p>
      </div>
    </motion.a>
  )
}
