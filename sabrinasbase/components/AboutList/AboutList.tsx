import { AboutMe } from "../../types/types";
import AboutItem from "./AboutItem";
import styles from "../../styles/components/AboutList.module.scss";

interface Props {
  data: AboutMe[];
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const NavigationBar: React.FC<Props> = ({
  data = [],
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  return (
    <nav>
      <ul
        className={styles.container}
        style={{
          marginTop: marginTop,
          marginRight: marginRight,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
        }}
      >
        {data.map((i, key) => {
          return (
            <AboutItem
              key={key}
              descriptor={i.descriptor}
              description={i.description}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
