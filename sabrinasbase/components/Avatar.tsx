import { ReactNode } from "react";
import styles from "../styles/components/Half.module.scss";
import TempAvatar from "../public/avatar.jpg"

interface Props {
  imgSrc?: string;
}

const Avatar: React.FC<Props> = ({ imgSrc = "TempAvatar" }) => {
  return (
    <>
      <img src={imgSrc}/>
    </>
  );
};

export default Avatar;
