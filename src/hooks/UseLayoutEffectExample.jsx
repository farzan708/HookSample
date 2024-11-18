import { useEffect, useState, useLayoutEffect } from "react";

const UseLayoutEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
     console.log(`useEffect(🚀) : ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`seccond useEffect(🚀) : ${count}`);
  }, [count]);

  useEffect(() => {
     console.log(`useLayoutEffect(🚀) : ${count}`);
  }, [count]);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-dark text-center">
        آشنایی با هوک useLayoutEffect
      </h5>
      <button
        className="btn btn-success"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        فقط اضافه بنما 😊
      </button>
      <p className="alert alert-light text-center">
        شمارش ات برابر می باشد با :{" "}
        <span className="badge rounded-pill bg-info">{count}</span>
      </p>
    </div>
  );
};

export default UseLayoutEffectExample;
