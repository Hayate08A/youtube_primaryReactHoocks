import React, { useReducer } from "react";

type TState = {
  savings: number;
};

type TAction =
  | { type: "DEPOSIT"; payload: number }
  | { type: "WITHDRAW"; payload: number };

const initialState = {
  savings: 100000,
};

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, savings: state.savings + action.payload };
    case "WITHDRAW":
      return { ...state, savings: state.savings - action.payload };
    default:
      return state;
  }
};

const Bank: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>Bank</div>;
};

export default Bank;
