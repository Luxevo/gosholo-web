"use client"

import type React from "react"
import { useTranslation } from "@/hooks/useTranslation"

export function NewsletterForm() {
  const { t, language } = useTranslation()

  // URLs for the forms
  const FR_IFRAME_URL = "https://ee01743d.sibforms.com/serve/MUIFAGqTcW5Dpu-TIEFW6NjJOljwb0BvMIzprCpqlqxixj1ZdBOBm2dWILtki_GDsHbttAPuomrNcNf9pzf6IOb--QwMB1YBqArgx49jS7fM40VWhX83SArwGNZrcNEY-LLBZd8540N3z-7eD-730rMFnD6x4riJLlJrDHIf8WCRt1EBLotvCA-3SczO6WHc6cPm9ERDWC5NSuCt";
  const EN_IFRAME_URL = "https://ee01743d.sibforms.com/serve/MUIFAMD7js4BzcQ5b_Q-ovGtEGFSzE34grhTXbiR2APmm4XoUpPxhpG-zXxAoV4YxL5eywPHPwTgVq01IHH0edCK1O3t5w5AaB3u5axSWiW23MoimC6LesqTsUrNIOL-wsH5jqmAiYS1UIMRSnl9tTsaE377ih2E1hwjeJK8w5mgu2myIR6qQyL8BeQpPcc9T4sGg7HmMnIvzQhF";

  const iframeSrc = language === "en" ? EN_IFRAME_URL : FR_IFRAME_URL;

  return (
    <div
    className="custom-scrollbar"
    style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      height: "600px",
      overflow: "auto",
      borderRadius: "13px",
      background: "#fff",
    }}
  >
    <iframe 
      width="100%"
      height="100%"
      src={iframeSrc}
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
        border: "none",
      }}
      title={language === "en" ? "Gosholo Newsletter Registration" : "Inscription à la newsletter Gosholo"}
    />
  </div>
   
  )
}

