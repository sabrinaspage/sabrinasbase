import { ReactNode } from "react";
import styles from '../styles/components/RightHalf.module.scss';

interface Props {
  children: ReactNode;
}

const Text: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={styles.half}>{children}</div>;
};

export default Text;