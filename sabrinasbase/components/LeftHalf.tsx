import { ReactNode } from "react";
import styles from '../styles/components/LeftHalf.module.scss';

interface Props {
  children: ReactNode;
}

const LeftHalf: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={styles.half}>{children}</div>;
};

export default LeftHalf;
