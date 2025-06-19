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
      src="https://ee01743d.sibforms.com/serve/MUIFAGTGwsEmvfYlwMYRYHzH8N_FNRm0Dp0Rg5BsmLQmxJ1DONObyhqkb8JeoO3ytGaki8tYiSov7jRv0aZcBmq4TumEdjRLvG2_gEonSnOC-f51WNxBrV9KdSNBpcbm8x79M9xn5B3QsrC3K4x76YIrZMV_erpLsVBw61vhcmUgktMxwyGS7xUGleYGAdjuMyT5ZIBk_emByfHu"      frameBorder="0"
      scrolling="auto"
      allowFullScreen
      style={{
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

