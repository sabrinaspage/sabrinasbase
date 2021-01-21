import { ReactNode } from "react";
import styles from "../styles/components/Half.module.scss";
import TempAvatar from "../public/pngtree-vector-avatar-icon-png-image_695765 (1).jpg"

interface Props {
  imgSrc?: string;
  children: ReactNode;
}

const Avatar: React.FC<Props> = ({ imgSrc = TempAvatar, ...props }) => {
  return (
    <>
      <img src={imgSrc}/>
    </>
  );
};

export default Avatar;
