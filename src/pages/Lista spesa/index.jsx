import React from "react";
import styles from "./Listaspesa.module.scss";
import { HiOutlineShoppingCart} from "react-icons/hi";
import Note from "../../Store/Notes";

const Listaspesa = () => {
  return (
    <div className={styles.Listaspesa}>

      <div className={styles.divtext}>
      <h2 className={styles.h2} >La mia spesa</h2>
      <p className={styles.p}>
        {" "}
        · Scrivi gli ingredienti che ti servono, questi alla fine formeranno la
        tua lista della spesa. <br></br>· Seleziona il giorno e l’ora dal
        Calendario, ti manderemo una mail con la tua lista e ti ricorderemo di passare dal supermercato.{" "}
        <br></br>· Enjoy !{" "}
      </p>
      <Note />
</div>

<div>
      <HiOutlineShoppingCart className={styles.svg} />
</div>

    </div>
  );
};

export default Listaspesa;
