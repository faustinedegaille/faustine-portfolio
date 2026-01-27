"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactWidget() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setError(true)
    }
  }

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

        <CardContent className="flex flex-col gap-3 md:gap-4 flex-1 min-h-0 overflow-visible pt-2">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <p className="text-sm font-medium">Laisser un message</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom-Prénom"
                required
                className="h-10 rounded-xl border border-black/5 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="h-10 rounded-xl border border-black/5 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ton message…"
              required
              className="min-h-[70px] md:min-h-[80px] rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-black/10"
            />

            <Button type="submit" disabled={loading} className="mt-1 h-10 rounded-full text-sm">
              {loading ? "Envoi…" : "Envoyer le message"}
            </Button>

            {success && (
              <p className="text-sm text-emerald-600">
                Message envoyé avec succès
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600">
                Une erreur est survenue. Réessaie plus tard.
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SocialCard({ href, label, value, bg, icon }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -4 }}
      className={`relative flex flex-col justify-between rounded-2xl p-3 md:p-4 text-white min-h-[90px] md:min-h-[100px] ${bg}`}
    >
      <div className="absolute right-2 top-2 md:right-3 md:top-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/85 text-black">
        <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
      </div>

      <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-xl bg-white/20">
        {icon}
      </div>

      <div>
        <p className="text-xs md:text-sm font-semibold">{label}</p>
        <p className="text-[10px] md:text-xs text-white/75 truncate">{value}</p>
      </div>
    </motion.a>
  )
}
