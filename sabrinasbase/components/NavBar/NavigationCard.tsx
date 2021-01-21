import { ReactNode } from "react";
import styles from '../styles/components/NavigationCard.module.scss';

interface Props {
  children: ReactNode;
}

const NavigationCard: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={""}>{children}</div>;
};

export default NavigationCard;
