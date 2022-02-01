import React from "react";
import TextHome from "../../components/TextHome";
import Note from "../../Store/Notes";

const Listaspesa = () => {
  return (
    <div>
      
      <TextHome
        Titlehome="LISTA SPESA"
        Paragraphhome="1. Dalla lista sottostante scegli gli ingredienti, questi alla fine formeranno la tua lista della spesa.
      2. Seleziona il giorno e l’ora dal Calendario e noi ti manderemo una email per ricordarti cosa comprare.
      3. Enjoy ! "
      /> 
      <Note />
    </div>
  );
};

export default Listaspesa;
