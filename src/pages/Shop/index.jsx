import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodItems from "../../components/FoodItems";

function Shop() {
  const APP_KEY = " 463fd4d541f9c5bf56bde2f5d62f2309 ";

  const APP_ID = "d375aa7b";

  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=apple&nutrition-type=cooking`;

  const [food, setFood] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setFood(res.data.hints);
    });
  }, []);

  console.log(food);

  return (
    <div>
      {food.map((item, index) => (


        <FoodItems key={index} title={item.food.label} />


      ))}
      
    </div>
  );
}

export default Shop;
