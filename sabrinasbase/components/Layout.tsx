import { ReactNode } from "react";
import Background from "../components/Background";
import RightHalf from "./RightHalf";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ ...props }) => {
  const { children } = props;
  return (
    <>
      <RightHalf>{children}</RightHalf>
      <Background />
    </>
  );
};

export default Layout;
