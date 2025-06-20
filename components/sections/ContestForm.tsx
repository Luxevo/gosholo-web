import { FC } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const ContestForm: FC = () => {
  const { language } = useTranslation();

  // URLs for the forms
  const FR_IFRAME_URL = "https://ee01743d.sibforms.com/serve/MUIFAJzN40ltUDMctygblGpokf7xbneHmHbXvwKS5hGtVFspmhcSNwugxP9WM-d0U4TC1yNuh9I5iYvxto_7V17Vm0eCW_favpetN_V4u1NtaUIOcOtzWyNhIrjtEzck6VmwqpRiPGhltaYd105usPTHGe6MT51974TGnweLKvKgWHd5R22b9QzsF5NqkMnkXUsBqZXCT0_Nhvj3";
  const EN_IFRAME_URL = "https://ee01743d.sibforms.com/serve/MUIFALLwcZ_mCXLe-q5FfoEcuxPXstsz_SNuIB4wkC5CDiMln4pAb69KTMTcDWFvcxl3rxpuumxnnl603uueKt5_1o15YX5OBVbmsjZyv99klSuJyHhVEGbHT1VaDND3L9U9ecJfUu7Vu9I_0f00RbwGdz6JCd93UteX5TlM-0_mUHuw6F_vu8A53lZfGLK0vRI1PgxraO7BZwhZ";

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
        title={language === "en" ? "Contest Registration Gosholo" : "Inscription au concours Gosholo"}
      />
    </div>
  );
};

export default ContestForm;