import { createStore } from "redux";

const counterReducer = (
  state = { num1: 1, num2: 5, minVal: null, maxVal: null },
  action
) => {
  if (action.type === "prevSubmitHandler") {
    if (state.num1 > 1) {
      return {
        num1: state.num1 - 5,
        num2: state.num2 - 5,
        minVal: state.minVal,
        maxVal: state.maxVal,
      };
    }else {
      return {
        num1 : state.num1,
        num2 : state.num2,
        minVal : state.minVal,
        maxVal : state.maxVal
      }
    }
  } else if (action.type === "nextSubmitHandler") {
    if (state.num2 < 20) {
      return {
        num1: state.num1 + 5,
        num2: state.num2 + 5,
        minVal: state.minVal,
        maxVal: state.maxVal,
      };
    }else {
      return {
        num1 : state.num1,
        num2 : state.num2,
        minVal : state.minVal,
        maxVal : state.maxVal
      }
    }
  }else if (action.type === "onSubmitHandler") {
    return {
        num1 : state.num1,
        num2 : state.num2,
        minVal : action.minVal,
        maxVal : action.maxVal
    }
  } else {
    return {
      num1 : state.num1,
      num2 : state.num2,
      minVal : state.minVal,
      maxVal : state.maxVal
    }
  }
};

const store = createStore(counterReducer);

export default store;
