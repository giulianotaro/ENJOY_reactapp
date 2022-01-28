import React from "react";
import ImgCarousel from "../../components/Carousel";
import TextHome from "../../components/TextHome";

const Home = () => (
  <>
    <ImgCarousel />

    <TextHome
      Titlehome="È ora di aprire il frigo... "

      Paragraphhome="Il supermercato ha chiuso, hai fatto tardi e il tuo collega ha deciso di farti una sorpresa venendo a cenare a casa tua,  
      bene, niente panico. 
      Enjoy è qui per aiutarti, 
      non ti resta che andare nel menù, cliccare su Dispensa, digitare gli ingredienti che hai a casa e scegliere tra le svariate ricette che ti appariranno nello schermo, FORZA E CORAGGIO !"
    />
  </>
);

export default Home;
