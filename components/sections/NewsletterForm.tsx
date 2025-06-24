"use client";

import type React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function NewsletterForm() {
  const { language } = useLanguage();

  // Form URLs for different languages
  const formUrls = {
    fr: "https://ee01743d.sibforms.com/serve/MUIFAPd3LI4cYuLIuKE2WThnBcMVSJgZEIoZFsVaOEmqhfln8qS2z-SS6DN4qfqSaIskRyfXAUj-fAq3s3Y5MmOaeeGh7M8uAjT_nJttI8m7eZGgZWgAv2ivYW-xEvmIjy8V8SnL00IlL2Ga215v_72WIHHCy2BNkubhVvHeSKQJTsDmIssuc4-RhJIfgCH9PJ3Q8aTdd_BgNOLw",
    en: "https://ee01743d.sibforms.com/serve/MUIFABoI1rcVWmf9DF4EPAsvbiKUXkiRr_ga_GInbuZS0Nie6U0vqtsN0tNtCGCMUith7kF8PwyJLKXFJocE0aHRUwxCzTU6PCQzk7ykXw8b9FGZhk7E5p95sIi76YzKYMj1BYXLVzwYS_Uh_39cdoIdFR589PTppQlzPGQ-DD1ElLN_Kdc3vuSNd-glYf4k0vkSk0jJfUiM9LzD",
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
