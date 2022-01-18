import { useReducer, useRef } from "react";
import styles from "./CityRef.module.scss";

const initialState = { city: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "change_state":
      return { ...state, [action.key]: action.payload };

    case "reset_state":
      return { ...state, change_state: !state.change_state };

    default:
      return state;
  }
};

const CityRef = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Ref = useRef();
  const Imgref = useRef(0);

  const submitCity = (e) => {
    e.preventDefault();

    Ref.current.innerText = `${state.city}`;
    Imgref.current.style.display = "inline";
    dispatch({ type: "reset_state" });
  };

  return (
    <>
      <div className={styles.City}>
        <h2> Where are you ? </h2>

        <h3 ref={Ref}> </h3>

        <img
          style={{ display: "none", width: "400px", height: "auto" }}
          ref={Imgref}
          src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
        />

        <input
          value={state.city}
          onChange={(e) =>
            dispatch({
              type: "change_state",
              key: "city",
              payload: e.target.value,
            })
          }
          name="city"
          id="city"
          placeholder="choose a city"
        />

        <button type="submit" onClick={submitCity}>
          {" "}
          CHOOSE{" "}
        </button>
      </div>
    </>
  );
};

export default CityRef;
