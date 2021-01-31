import { redirect } from "next/dist/next-server/server/api-utils";
import { ReactNode } from "react";
import styles from "../../styles/components/Text.module.scss";

interface Props {
  children: ReactNode;
  fontSize?: string;
  color?: string;
}

const Text: React.FC<Props> = ({
  fontSize = "34px",
  color = "black",
  ...props
}) => {
  const { children } = props;
  return (
    <div
      className={styles.text}
      style={{
        fontSize: fontSize,
        color: color,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
