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
      src="https://ee01743d.sibforms.com/serve/MUIFAAj8vqqwntD_syZmcDpKSF8zhcn0Qi75TDAodWD2icKhAufFSAdNjCmv5hyF8sRzQ79uaEFJW41nSzrPa0iARzh-ZPUThbRmtCXTdc4HMA5CBMt2ph1QbxL8X4sKAzZq_6XLzYCb1Y9rHth1Z-BRsQY_ZhkjNwuf7gT0javSe6OORPic01OLayNYt6pcBF-Ci9VKuUoD3SST"            style={{
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

