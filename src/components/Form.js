import React,{useState} from "react";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux";

export default function Form() {
    const [minVal, setMinVal] = useState();
    const [maxVal, setMaxVal] = useState();
    const dispatch = useDispatch();

  const onMinChangeHandler = (event) => {
        setMinVal(event.target.value);
  }

  const onMaxChangeHandler = (event) => {
        setMaxVal(event.target.value);
  }

  const onSubmitHandler = (event) => {
       event.preventDefault();
      dispatch({ type : 'onSubmitHandler' , minVal : minVal , maxVal : maxVal })
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label>Please enter your range of price for the items.</label>
      <div className={classes.inputContainer}>
        <input type="number" min="1" max="1000" step="0.1" placeholder="minimum" onChange={onMinChangeHandler} required/>
        <input type="number" min="1" max="1000" step="0.1" placeholder="maximum" onChange={onMaxChangeHandler} required/>
      <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
