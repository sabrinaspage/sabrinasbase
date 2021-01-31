import { ReactNode } from "react";
import styles from "../../styles/components/Text.module.scss";
import TextAlignProperty from 'csstype'

interface Props {
  children: ReactNode;
  fontSize?: string;
  color?: string;
  textAlign?: TextAlignProperty.Property.TextAlign;
}

const Text: React.FC<Props> = ({
  fontSize = "12px",
  color = "black",
  textAlign = "center",
  ...props
}) => {
  const { children } = props;
  return (
    <div
      className={styles.text}
      style={{
        fontSize: fontSize,
        color: color,
        textAlign: textAlign,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
