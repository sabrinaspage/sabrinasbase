import styles from "../../styles/components/NavigationCard.module.scss";
import { useRouter } from "next/router";

interface Props {
  name: string;
  page: string;
  color: string;
}

const NavigationCard: React.FC<Props> = ({ ...props }) => {
  const { name, page, color } = props;

  var router = useRouter();

  return (
    <li
      className={styles.item}
      style={{ borderColor: color }}
      onClick={() => router.push(`/${page}`)}
    >
      {name}
    </li>
  );
};

export default NavigationCard;
