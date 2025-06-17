"use server"

export async function sendAssistanceEmail(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const category = formData.get("category") as string

    // Validation des champs requis
    if (!firstName || !lastName || !email || !subject || !message || !category) {
      return {
        success: false,
        error: "Tous les champs obligatoires doivent être remplis.",
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Veuillez entrer une adresse email valide.",
      }
    }

    // Mapper les catégories pour un affichage plus lisible
    const categoryMap: { [key: string]: string } = {
      account: "Problème de compte",
      business: "Questions commerciales",
      payment: "Paiements et facturation",
      technical: "Problème technique",
      general: "Question générale",
    }

    const categoryDisplay = categoryMap[category] || category

    // Log des informations pour debug (en attendant la solution email)
    console.log("=== NOUVEAU MESSAGE D'ASSISTANCE ===")
    console.log("Destinataire: assistance@gosholo.com")
    console.log("De:", email)
    console.log("Nom:", firstName, lastName)
    console.log("Téléphone:", phone || "Non fourni")
    console.log("Catégorie:", categoryDisplay)
    console.log("Sujet:", subject)
    console.log("Message:", message)
    console.log("Date:", new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" }))
    console.log("=====================================")

    // Simuler un succès pour le moment
    return {
      success: true,
      message: "Message envoyé avec succès!",
      emailId: `sim_${Date.now()}`,
    }
  } catch (error) {
    console.error("Erreur lors du traitement du message:", error)

    return {
      success: false,
      error: "Une erreur technique est survenue. Veuillez réessayer plus tard.",
    }
  }
}
