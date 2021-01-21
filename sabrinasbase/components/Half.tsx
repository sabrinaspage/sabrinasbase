import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Half: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return <div className="position: absolute;">{children}</div>;
};

export default Half;
