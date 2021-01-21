import { useEffect, useState } from "react";
import { DEFAULT_AVATAR } from "../constants/CONSTANTS";

import styles from "../styles/components/Avatar.module.scss";

interface Props {
  imgSrc?: string;
  width?: number | string;
  height?: number | string;
}

var colours = [
  "#EC6060",
  "#4DB52E",
  "#31D1B3",
  "#1D9DCB",
  "#1D3ACB",
  "#AD70CC",
  "#E84F82",
  "#CB1212",
];

const Avatar: React.FC<Props> = ({
  imgSrc = DEFAULT_AVATAR,
  width = "30%",
  height = "30%",
}) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    setInterval(() => {
      var count = 0;
      var randomNumber = Math.floor(Math.random() * 11);
      count = (count + randomNumber) % colours.length;
      setColor(colours[count]);
    }, 3000);
  }, []);

  return (
    <>
      <img
        src={imgSrc}
        className={styles.img}
        style={{ borderColor: color }}
        width={width}
        height={height}
      />
    </>
  );
};

export default Avatar;
