import React from "react";
import classes from "./Button.module.css";
import { useDispatch } from "react-redux";

export default function Button() {
  const dispatch = useDispatch();

  const prevSubmitHandler = () => {
   dispatch({ type : 'prevSubmitHandler'});
  }

  const nextSubmitHandler = () => {
    dispatch({ type : 'nextSubmitHandler'});
  }

  return (
    <div className={classes.buttonContainer}>
      <button type="submit" onClick={prevSubmitHandler}>
        prev..
      </button>
      <button type="submit" onClick={nextSubmitHandler}>
        next..
      </button>
    </div>
  );
}
