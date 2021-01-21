import styles from "../../styles/components/NavigationCard.module.scss";

interface Props {
  name: string;
  page: string;
}

const NavigationCard: React.FC<Props> = ({ ...props }) => {
  const { name, page } = props;
  return (
    <a className={styles.item} onClick={() => null}>
      {name}
    </a>
  );
};

export default NavigationCard;
