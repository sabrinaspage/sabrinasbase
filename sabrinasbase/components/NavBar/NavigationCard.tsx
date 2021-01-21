import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NavigationCard: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={""}>{children}</div>;
};

export default NavigationCard;
