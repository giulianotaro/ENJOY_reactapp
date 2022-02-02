const FoodItems = (props) => {
  return (
    <div>
      {props.title}
      <img alt="imgfood" src={props.src}></img>
    </div>
  );
};

export default FoodItems;
