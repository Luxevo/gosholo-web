"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, language }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
        setErrorMessage(
          language === "fr"
            ? "Une erreur est survenue. Veuillez réessayer."
            : "An error occurred. Please try again."
        )
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        language === "fr"
          ? "Une erreur est survenue. Veuillez réessayer."
          : "An error occurred. Please try again."
      )
    }
  }

  const handleClose = () => {
    setStatus("idle")
    setEmail("")
    setErrorMessage("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white p-0 overflow-hidden">
        <div className="p-6 sm:p-8">
            {status === "success" ? (
              /* Success state */
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gosholo-light-green mb-4">
                  <CheckCircle className="h-8 w-8 text-gosholo-primary" />
                </div>
                <h3 className="text-xl font-bold text-gosholo-primary mb-2">
                  {language === "fr" ? "Merci !" : "Thank you!"}
                </h3>
                <p className="text-gray-600">
                  {language === "fr"
                    ? "Vous êtes maintenant inscrit à notre infolettre."
                    : "You are now subscribed to our newsletter."}
                </p>
              </div>
            ) : (
              /* Form state */
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gosholo-light-green mb-4">
                    <Mail className="h-6 w-6 text-gosholo-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gosholo-primary leading-tight">
                    {language === "fr"
                      ? "Les bonnes offres et événements, au bon moment."
                      : "The right offers and events, at the right time."}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === "fr" ? "Votre courriel" : "Your email"}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gosholo-primary focus:outline-none transition-colors text-gray-800"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-3 bg-gosholo-orange text-white font-bold rounded-xl hover:bg-gosholo-orange/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {language === "fr" ? "Inscription..." : "Subscribing..."}
                      </>
                    ) : (
                      language === "fr" ? "Je m'inscris" : "Subscribe"
                    )}
                  </button>
                </form>
              </>
            )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
