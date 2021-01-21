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
      <Background />
      <RightHalf>{children}</RightHalf>
    </>
  );
};

export default Layout;
