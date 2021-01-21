import { ReactNode } from "react";
import { DEFAULT_AVATAR } from "../constants/CONSTANTS";
import styles from "../styles/components/Avatar.module.scss";

interface Props {
  imgSrc?: string;
}

const Avatar: React.FC<Props> = ({ imgSrc = DEFAULT_AVATAR }) => {
  return (
    <>
      <img src={imgSrc} className={""}/>
    </>
  );
};

export default Avatar;
