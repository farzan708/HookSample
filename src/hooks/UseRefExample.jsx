import { useState, useEffect, useRef } from "react";

const useRefExample = () => {
  const inputRef = useRef(null);
  const prevState = useRef("");
  const renderCount = useRef(1);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  useEffect(() => {
    prevState.current = name;
  }, [name]);
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <div className="w-50 d-grid gap-2 mx-auto">
        <h5 className="alert alert-success text-center">
          آشنایی با هوک useRef
        </h5>
        <p>{`نام شما برابر است با : ${name}`}</p>
        <p>{`نام قبلی شما برابر بود با : ${prevState.current}`}</p>

        <p>{`تعداد رندر شما بربر است با : ${renderCount.current}`}</p>

        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="اسم بده دلبندم..."
        />
        <button
          type="button"
          onClick={focusInput}
          className="btn btn-primary btn-block mt-2"
        >
          تمرکز بنما 👀
        </button>
      </div>
    </>
  );
};

export default useRefExample;
