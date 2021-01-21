import { NavCard } from "../../types/types";
import NavigationCard from "./NavigationCard";

import styles from "../../styles/components/NavigationBar.module.scss";

interface Props {
  data: NavCard[];
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const NavigationBar: React.FC<Props> = ({
  data = [],
  marginTop = 0,
  marginBottom = 0,
  marginLeft = -40,
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
            <NavigationCard
              key={key}
              name={i.name}
              page={i.page}
              color={i.color}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
