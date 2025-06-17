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

    // Préparer le contenu de l'email en HTML
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #016167; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-section { background-color: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .label { font-weight: bold; color: #016167; }
        .message-content { background-color: #fff; border-left: 4px solid #FF6233; padding: 15px; margin: 15px 0; }
        .footer { background-color: #B2FD9D; padding: 15px; text-align: center; font-size: 12px; color: #016167; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏪 Nouveau message d'assistance - Gosholo</h1>
    </div>
    
    <div class="content">
        <div class="info-section">
            <h3>📋 Informations du contact</h3>
            <p><span class="label">Nom complet :</span> ${firstName} ${lastName}</p>
            <p><span class="label">Email :</span> <a href="mailto:${email}">${email}</a></p>
            <p><span class="label">Téléphone :</span> ${phone || "Non fourni"}</p>
            <p><span class="label">Catégorie :</span> ${categoryDisplay}</p>
        </div>

        <div class="info-section">
            <h3>📝 Sujet de la demande</h3>
            <p><strong>${subject}</strong></p>
        </div>

        <div class="message-content">
            <h3>💬 Message</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
    </div>

    <div class="footer">
        <p>📅 Message envoyé le ${new Date().toLocaleString("fr-CA", {
          timeZone: "America/Toronto",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}</p>
        <p>🌐 Depuis le formulaire d'assistance de <strong>gosholo.com</strong></p>
    </div>
</body>
</html>
    `.trim()

    // Version texte pour les clients email qui ne supportent pas HTML
    const textContent = `
🏪 NOUVEAU MESSAGE D'ASSISTANCE - GOSHOLO

📋 INFORMATIONS DU CONTACT:
- Nom: ${firstName} ${lastName}
- Email: ${email}
- Téléphone: ${phone || "Non fourni"}
- Catégorie: ${categoryDisplay}

📝 SUJET: ${subject}

💬 MESSAGE:
${message}

---
📅 Message envoyé le ${new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" })}
🌐 Depuis le formulaire d'assistance de gosholo.com
    `.trim()

    // Envoyer l'email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Gosholo Assistance <noreply@gosholo.com>",
        to: ["jolan@luxevotech.com"],
        reply_to: email,
        subject: `[Gosholo Assistance] ${subject}`,
        text: textContent,
        html: htmlContent,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Erreur Resend:", response.status, errorData)

      return {
        success: false,
        error: "Erreur lors de l'envoi de l'email. Veuillez réessayer ou nous contacter directement.",
      }
    }

    const result = await response.json()
    console.log("Email envoyé avec succès:", result.id)

    return {
      success: true,
      message: "Message envoyé avec succès!",
      emailId: result.id,
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)

    return {
      success: false,
      error: "Une erreur technique est survenue. Veuillez réessayer plus tard.",
    }
  }
}
