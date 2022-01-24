import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodItems from "../../components/FoodItems";
import ImgPageShop from "../../components/ImgPageShop";
import styles from "./Shop.module.scss";

function Shop() {
  const APP_KEY = " 463fd4d541f9c5bf56bde2f5d62f2309 ";

  const APP_ID = "d375aa7b";

  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=food&fast-food=cooking`;

  const [food, setFood] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setFood(res.data.hints);
    });
  }, []);

  console.log(food);

  return (
   <>
   
    <div className={styles.ImgPageShop}> <ImgPageShop src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" /></div>
    <div className={styles.grid}>
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
