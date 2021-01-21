import { ReactNode } from "react";
import styles from '../styles/components/RightHalf.module.scss';

interface Props {
  children: ReactNode;
}

const RightHalf: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={styles.half}>{children}</div>;
};

export default RightHalf;
