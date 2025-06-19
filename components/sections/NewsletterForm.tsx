"use client"

import type React from "react"
import { useTranslation } from "@/hooks/useTranslation"

export function NewsletterForm() {
  const { t } = useTranslation()



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
      src="https://ee01743d.sibforms.com/serve/MUIFAGqTcW5Dpu-TIEFW6NjJOljwb0BvMIzprCpqlqxixj1ZdBOBm2dWILtki_GDsHbttAPuomrNcNf9pzf6IOb--QwMB1YBqArgx49jS7fM40VWhX83SArwGNZrcNEY-LLBZd8540N3z-7eD-730rMFnD6x4riJLlJrDHIf8WCRt1EBLotvCA-3SczO6WHc6cPm9ERDWC5NSuCt"      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
        border: "none",
      }}
      title="Inscription à la newsletter Gosholo"
    />
  </div>
   
  )
}

