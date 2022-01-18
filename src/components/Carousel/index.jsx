import { useRef } from "react";
import styles from "./Carousel.module.scss"


const Carousel = (element, dir) => {
    if (dir === "left") element.current.scrollLeft += 800;
    if (dir === "right") element.current.scrollLeft -= 800;
  
    if (element.current.scrollLeft >= 300) element.current.scrollLeft = 0;
    if (element.current.scrollLeft === 0) element.current.scrollLeft = 800; 
};
  
const ImgCarousel = () => {


const carouselref = useRef () ;


return (
    <div>
   
   <h1>Enjoy.</h1>
   <p>Safe, fast, comfortable</p>
      <div className={styles.carousel} ref={carouselref}>

        <div className={styles.wrapper}>

        

            <img src="https://images.unsplash.com/photo-1601972602237-8c79241e468b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            <img src="https://images.unsplash.com/photo-1548150325-465c13361e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <img src="https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <img src="https://images.unsplash.com/photo-1556908153-1055164fe2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />

          
        </div>

      </div>
      <div className={styles.carousel__buttons}>
        <button className={styles.btn} onClick={() => Carousel(carouselref, "right")}>
          {"•"}
        </button>
        <button className={styles.btn} onClick={() => Carousel(carouselref, "left")}>
          {"•"}
        </button>
      </div>


    </div>
  );
}

  export default ImgCarousel;