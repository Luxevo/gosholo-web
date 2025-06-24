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
      src="https://ee01743d.sibforms.com/serve/MUIFAPd3LI4cYuLIuKE2WThnBcMVSJgZEIoZFsVaOEmqhfln8qS2z-SS6DN4qfqSaIskRyfXAUj-fAq3s3Y5MmOaeeGh7M8uAjT_nJttI8m7eZGgZWgAv2ivYW-xEvmIjy8V8SnL00IlL2Ga215v_72WIHHCy2BNkubhVvHeSKQJTsDmIssuc4-RhJIfgCH9PJ3Q8aTdd_BgNOLw"      allowFullScreen
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
