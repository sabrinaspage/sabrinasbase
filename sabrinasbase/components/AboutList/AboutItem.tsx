import styles from "../../styles/components/AboutItem.module.scss";

interface Props {
  descriptor: string;
  description: string;
}

const NavigationCard: React.FC<Props> = ({ ...props }) => {
  const { descriptor, description } = props;

  return (
    <li className={styles.item}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}

          className={styles.title}
        >
          <div style={{ display: "inline-block", paddingLeft: '10px' }}>
            <h3> {descriptor} </h3>
          </div>
          <div style={{ display: "inline-block", paddingRight: '10px' }}>
            <h4>{description} </h4>
          </div>
        </div>
    </li>
  );
};

export default NavigationCard;
