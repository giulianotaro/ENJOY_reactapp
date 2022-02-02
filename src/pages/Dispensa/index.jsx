import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodItems from "../../components/FoodItems";
import ImgPageShop from "../../components/ImgPageShop";
import { Link } from "react-router-dom";
import styles from "./Dispensa.module.scss";

//eslint-disable-next-line react-hooks/exhaustive-deps

function Dispensa() {
  const [food, setFood] = useState([]);
  const [ingredient, setIngredient] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    
    const APP_KEY = " 463fd4d541f9c5bf56bde2f5d62f2309 ";

    const APP_ID = "d375aa7b";

    const baseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${ingredient}&fast-food=cooking`;

    const fetchFood = () => {
      axios.get(baseURL).then((res) => {
        setFood(res.data.hints);
        console.log(res.data.hints);
      });
    };

    const isFood = () => {
      return ingredient ? fetchFood() : "";
    };

    return isFood();
  }, [ingredient]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
    
  };

  const submitIngrHandler = (e) => {
    e.preventDefault();

    setIngredient(inputText);

    setInputText("");
  };
  return (
    <>
      <div className={styles.ImgPageShop}>
        <ImgPageShop src="https://images.unsplash.com/photo-1571211905393-6de67ff8fb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />

        <ImgPageShop src="https://images.unsplash.com/photo-1585735119301-232c1633d439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />

        <ImgPageShop src="https://images.unsplash.com/photo-1582703193229-4306f478478b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </div>

      <div className={styles.input_div}>
        <form onSubmit={submitIngrHandler}>
          <label>I miei ingredienti:</label>
          <input
            type="search"
            onChange={inputTextHandler}
            value={inputText}
            placeholder="Inserisci ingredienti"
          ></input>
        </form>
      </div>

      <div className={styles.grid}>
        {food.map((item, index) => (
          <Link key={index} to="/">
            <div className={styles.card}>
              <FoodItems title={item.food.label} src={item.food.image}  />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Dispensa;
