import { ReactNode } from "react";
import styles from "../../styles/components/Text.module.scss";

interface Props {
  children: ReactNode;
}

const SlideInText: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={styles.slide_up}>{children}</div>;
};

export default SlideInText;
