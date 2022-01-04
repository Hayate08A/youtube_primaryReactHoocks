import React, { useState, useReducer } from "react";
import styles from "./Bank.module.scss";

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
  const [amount, setAmount] = useState<number>(0);
  const onDeposit = (amount: number) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };
  const onWithDraw = (amount: number) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };
  return (
    <div>
      <h4>残高 : {state.savings.toLocaleString()}円</h4>
      <div className={styles.operationArea}>
        <div>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            type={"number"}
          />
          <span>円</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => onDeposit(amount)}>預け入れ</button>
          <button onClick={() => onWithDraw(amount)}>引き出し</button>
        </div>
      </div>
    </div>
  );
};

export default Bank;
