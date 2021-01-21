import { ReactNode } from "react";
import styles from '../styles/components/NavigationBar.module.scss';

interface Props {
  children: ReactNode;
}

const NavigationBar: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={""}>{children}</div>;
};

export default NavigationBar;
