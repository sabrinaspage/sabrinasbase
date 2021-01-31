import React from "react";
import styles from "../styles/components/Pdf.module.scss";

interface Props {
  pdfURL: string;
}
const Pdf: React.FC<Props> = ({ ...props }) => {
  const { pdfURL } = props;
  return (
    <object
      width="80%"
      height="80%"
      data={pdfURL}
      type="application/pdf"
      className={styles.centered}
    ></object>
  );
};

export default Pdf;
