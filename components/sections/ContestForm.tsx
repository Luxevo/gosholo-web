"use client";

import { FC } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContestForm: FC = () => {
  const { language } = useLanguage();

  // Form URLs for different languages
  const formUrls = {
    fr: "https://ee01743d.sibforms.com/serve/MUIFAJDvYFu8ihCUXD_rNX1YbxgvsnJhyTNezowgQ2LePzEHPXd2OxKXSylpdgg2-XZnlqGeGdSV5vBSbqWiAsnMbOsZtSipYblYo4_eU4M9D0jhUnMCqIH0zQUZuYEfBOvFIvAQZv8FjeIGHfVOKwHUVXZFhADlKTKL5AVocmHVIDDiBf8BdtV5rTveuhjmMKc3HlTU3RoNWGfN",
    en: "https://ee01743d.sibforms.com/serve/MUIFAOyI5Mnwr-VZX3WLRGp66xJ1XuMmtQoNuAkfZ3ih7JQ5q3LfmlEEJQSivhE14VpmhZLg7cs2M6LYwo7Wk3Qixn9C0YXqVGKPXGZ4hJj588L1T6yz-erlM2SEgl4EepXuKYT3sb0Ssuog6sdbSF6ISNlrFzB2sJcj7xDYKPKYkA7Xn8pCqq6xm8vLij9un92YAhBZIEWSwTBX",
  };

  // Form titles for different languages
  const formTitles = {
    fr: "Inscription au concours Gosholo",
    en: "Gosholo Contest Registration",
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
};

export default ContestForm;
