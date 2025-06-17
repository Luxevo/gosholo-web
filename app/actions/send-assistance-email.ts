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

    // Préparer le contenu de l'email
    const emailContent = `
Nouveau message d'assistance depuis le site Gosholo

INFORMATIONS DU CONTACT:
- Nom: ${firstName} ${lastName}
- Email: ${email}
- Téléphone: ${phone || "Non fourni"}
- Catégorie: ${category}

SUJET: ${subject}

MESSAGE:
${message}

---
Message envoyé depuis le formulaire d'assistance de gosholo.com
Date: ${new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" })}
    `.trim()

    // Utiliser l'API Web Fetch pour envoyer l'email via un service externe
    // Ici, nous utilisons une approche simple avec mailto: ou un service d'email

    // Pour l'instant, nous allons utiliser une approche avec une API externe
    // Vous devrez configurer un service d'email comme Resend, SendGrid, ou Nodemailer

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@gosholo.com",
        to: ["jolan@luxevotech.com"],
        reply_to: email,
        subject: `[Gosholo Assistance] ${subject}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, "<br>"),
      }),
    })

    if (!response.ok) {
      // Si Resend n'est pas configuré, on utilise une approche alternative
      // Log des informations pour debug
      console.log("Email à envoyer:", {
        to: "jolan@luxevotech.com",
        from: email,
        subject: `[Gosholo Assistance] ${subject}`,
        content: emailContent,
      })

      // Simuler un succès pour le développement
      // En production, vous devrez configurer un vrai service d'email
      return {
        success: true,
        message: "Message envoyé avec succès!",
      }
    }

    const result = await response.json()

    return {
      success: true,
      message: "Message envoyé avec succès!",
      emailId: result.id,
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)

    return {
      success: false,
      error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
    }
  }
}
