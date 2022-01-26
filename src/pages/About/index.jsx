import React from "react";
import { Map, Layers, layer } from "react-openlayers";
import CityRef from "../../components/CityRef";
import styles from "./About.module.scss"


function About() {






  return (

    <>
    <div className={styles.map}>
      <Map view={{ center: [0, 0], zoom: 3, coordinate: [7.85, 47.983333] }}>
        <Layers>
          <layer.Tile></layer.Tile>
        </Layers>
      </Map>
    </div>

 <div>
  <CityRef />
  </div>

  </>
  );
}

export default About;
