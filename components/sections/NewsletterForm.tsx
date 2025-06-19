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
      src="https://ee01743d.sibforms.com/serve/MUIFAJh33dDDKPxu6CEXIbceRcy_PF43wffiXk7MEoSvDZ38RMgoi4DqYOaKmA5cU-4d9MXkFA1LQO9N7HnMCio8FqkNhH_4m0hoNuwcPxpEYrie4qq87FE0TaqLPTRWWEzK8RfgHRyNl80K4VJdF4BwyYTuqFvjBOXRo-wiSJ0UaYuETlJBc4rUcjxOa2SOEKURXMTRaKye9Aro"      scrolling="auto"
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

