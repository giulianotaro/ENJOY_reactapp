import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodItems from "../../components/FoodItems";
import ImgPageShop from "../../components/ImgPageShop";
import styles from "./Shop.module.scss";

function Shop() {
  const [food, setFood] = useState([]);
  const [ingr, setIngr] = useState("");
  const [inputText, setInputText] = useState("");

  const APP_KEY = " 463fd4d541f9c5bf56bde2f5d62f2309 ";

  const APP_ID = "d375aa7b";

  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=food&fast-food=cooking`;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleIngr = (e) => {
    e.preventDefault();
    setIngr(inputText);
  };

  console.log(ingr);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setFood(res.data.hints);
    });
  }, []);

  return (
    <>
      <div className={styles.ImgPageShop}>
        <ImgPageShop src="https://images.unsplash.com/photo-1571211905393-6de67ff8fb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />

        <ImgPageShop src="https://images.unsplash.com/photo-1585735119301-232c1633d439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />

        <ImgPageShop src="https://images.unsplash.com/photo-1582703193229-4306f478478b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </div>

      <div className={styles.grid}>
        <input
          onChange={inputTextHandler}
          value={inputText}
          placeholder="Inserisci ingrediente"
        ></input>

        <button onSubmit={handleIngr}></button>
        {food.map((item, index) => (
          <div className={styles.card}>
            <FoodItems key={index} title={item.food.label} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
