"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ArrowUpRight } from "lucide-react"
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
        <CardHeader className="shrink-0">
          <CardTitle className="text-base">Contact</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2.5 flex-1 min-h-0">
          <motion.a
            href="mailto:faustinedegaille59@gmail.com"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white/60 px-2.5 py-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70">
              <Mail className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium truncate">
                faustinedegaille59@gmail.com
              </p>
            </div>
          </motion.a>

          <div className="grid grid-cols-2 gap-2.5 flex-1 min-h-0">
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
      className={`relative flex flex-col justify-between rounded-2xl p-3 text-white h-full ${bg}`}
    >
      <div className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-black">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-white/75">{value}</p>
      </div>
    </motion.a>
  )
}
