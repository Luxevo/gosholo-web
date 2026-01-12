"use client";

import type React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function NewsletterForm() {
  const { language } = useLanguage();

  // Form URLs for different languages
  const formUrls = {
    fr: "https://ee01743d.sibforms.com/serve/MUIFAI2nd2VOwor4JOzIfYzfRtTarGErHe2f4P30GZUoWhG4X4Bkrg_GZC8Xpr93M0Ycf1ARESuVxZzPGpzJWO8pUZX-6GejF_Wh6N7WBdV3uiPZVPFe6PLF9quom013TllfbluPZjZbpPYmF7sRb0f2aWftEAMHqWuborVbQVZFi9217a9A7RT26CIPyvAqH5fBcfc3jmo3StLu",
    en: "https://ee01743d.sibforms.com/serve/MUIFAH_up5AqplP3E7SItgBhiVVZlmf4PIBC3JTZGZ8V2eAbAAWUUSc93-FcAKGT3M6CPLkL8hK23e4movwBOVpwGljRwIGUXCiCVdf0xK94DYb4sU6ox0p1wd6M8e2apFTWLBOpq1x0IcLOk-5rU9p_ciMRCzXc8q8MK4CKB4XlljG_s6FVNy7KyTJebTs47WyuX74D_qxTEaAZ",
  };

  // Form titles for different languages
  const formTitles = {
    fr: "Inscription à la newsletter Gosholo",
    en: "Gosholo Newsletter Subscription",
  };

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
        src={formUrls[language]}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          border: "none",
        }}
        title={formTitles[language]}
      />
    </div>
  );
}
