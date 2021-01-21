import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NavigationBar: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className={""}>{children}</div>;
};

export default NavigationBar;
