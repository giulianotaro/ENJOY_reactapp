import styles from "./TextHome.module.scss";
import { MdOutlineFoodBank } from "react-icons/md";

const TextHome = (props) => {
  return (

    <div className={styles.divone}>  

    <div className={styles.DivTextHome}>

      <h3>{props.Titlehome}</h3>

      <p>{props.Paragraphhome} </p>

    </div>

      <div className={styles.icons}>
      <MdOutlineFoodBank  />
      </div>

    </div>
  );
};

export default TextHome;
