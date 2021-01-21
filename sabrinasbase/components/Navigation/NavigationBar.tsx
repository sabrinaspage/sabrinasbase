import { NavCard } from "../../types/types";
import NavigationCard from "./NavigationCard";

import styles from "../../styles/components/NavigationBar.module.scss";

interface Props {
  data: NavCard[];
}

const NavigationBar: React.FC<Props> = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      {data.map((i, key) => {
        return <NavigationCard key={key} name={i.name} page={i.page} />;
      })}
    </div>
  );
};

export default NavigationBar;
