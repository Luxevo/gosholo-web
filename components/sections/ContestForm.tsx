import { FC } from "react";

const ContestForm: FC = () => {
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
        src="https://ee01743d.sibforms.com/serve/MUIFAJzN40ltUDMctygblGpokf7xbneHmHbXvwKS5hGtVFspmhcSNwugxP9WM-d0U4TC1yNuh9I5iYvxto_7V17Vm0eCW_favpetN_V4u1NtaUIOcOtzWyNhIrjtEzck6VmwqpRiPGhltaYd105usPTHGe6MT51974TGnweLKvKgWHd5R22b9QzsF5NqkMnkXUsBqZXCT0_Nhvj3"        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          border: "none",
        }}
        title="Inscription au concours Gosholo"
      />
    </div>
  );
};

export default ContestForm;