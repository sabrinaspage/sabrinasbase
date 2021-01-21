import { ReactNode } from "react";
import { DEFAULT_AVATAR } from "../constants/CONSTANTS";

import styles from "../styles/components/Avatar.module.scss";
import randomColor from 'random-color';

var random = randomColor();

interface Props {
  imgSrc?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<Props> = ({ imgSrc = DEFAULT_AVATAR, width = 500, height = 500 }) => {
  return (
    <>
      <img src={imgSrc} className={styles.img} style={{borderColor: random.hexString()}} width={width} height={height}/>
    </>
  );
};

export default Avatar;
