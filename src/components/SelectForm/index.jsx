import { useState, useReducer } from "react";
import styles from "./SelectForm.module.scss"

const initForm = {
  Name: "",
  City: "",
  Phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update_form":
      return {
        ...state,
        [action.key]: action.payload,
      };

    case "reset_input":
      return {
        ...state,
        update_form: !state.update_form,
      };

    default:
      return state;
  }
};

const SelectForm = () => {
  const [state, dispatch] = useReducer(reducer, initForm);

/*   const sendBtn = (e) => {
 

  

   e.preventDefault()
   
  }; */

  

  return (
    <form className={styles.form}>
      <div>
        <input
          value={state.Name}
          onChange={(e) =>
            dispatch({
              type: "update_form",
              key: "Name",
              payload: e.target.value,
            })
          }
          name="Name"
          id="Name"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          value={state.City}
          onChange={(e) =>
            dispatch({
              type: "update_form",
              key: "City",
              payload: e.target.value,
            })
          }
          name="City"
          id="City"
          type="text"
          placeholder="Your City"
          required
        />

        <input
          value={state.Phone}
          onChange={(e) =>
            dispatch({
              type: "update_form",
              key: "Phone",
              payload: e.target.value,
            })
          }
          name="Phone"
          id="Phone"
          type="text"
          placeholder="Your Phone"
          required
        />

        <button type="submit"  onClick={(e) =>
          
          dispatch({
            type: "reset_input",
          })}

       /*  dispatch({

            type: "reset_input",

          }) */ >

          SEND

        </button>
      </div>
    </form>
  );
};

export default SelectForm;
