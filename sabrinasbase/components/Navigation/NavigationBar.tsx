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

const NavigationBar: React.FC<Props> = ({ data = [], marginTop = 0, marginBottom, marginLeft, marginRight }) => {
  return (
    <div className={styles.container} style={{
      margin: marginTop, marginRight, marginBottom, marginLeft
    }}>
      {data.map((i, key) => {
        return <NavigationCard key={key} name={i.name} page={i.page} />;
      })}
    </div>
  );
};

export default NavigationBar;
