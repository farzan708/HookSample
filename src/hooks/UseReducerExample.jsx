import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + action.payload };
    case ACTIONS.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const useReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT, payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT, payload: 1 });
  };
  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-info text-center">آشنایی با هوک useReducer</h5>
      <button className="btn btn-primary" onClick={increment}>
        اضافه بنما 😉
      </button>
      <p className="alert alert-warning text-center">
        شمارش شما دوست عزیز برابر است با :{" "}
        <span className="badge rounded-pill bg-success">{state.count}</span>
      </p>
      <button className="btn btn-danger" onClick={decrement}>
        کم بنما 🤠
      </button>
    </div>
  );
};

export default useReducerExample;
