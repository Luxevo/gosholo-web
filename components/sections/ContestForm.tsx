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
        borderRadius: "12px",
        background: "#fff",
      }}
    >
      <iframe 
        width="100%"
        height="100%"
        src="https://ee01743d.sibforms.com/serve/MUIFAInKPBOgRBeFOa1lZXZ6u7_BdgtqJQsVFk981zBEt63U7jXqcwR5JU2HOiTwsKotdic3vkMqZZNNCPDcbdRKwKq7RkRpCwfRyyCUY5aM520okmFUcULqcH3_NzFIgEx9JKVDUzGsGj1dNQMwcR17VyTD66FVt8NPPwirciTwe81hBP_dnPrC2odyVMhCW26kMmtEITPNTcVe"
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
        title="Inscription au concours Gosholo"
      />
    </div>
  );
};

export default ContestForm;