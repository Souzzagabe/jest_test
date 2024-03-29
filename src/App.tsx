import { useState } from "react";
import OnlyHookForm from "./components/OnlyHookForm";
// import Button from "./components/Button";

function App() {
  const [changeButton, setChangeButton] = useState(
    "Let's learn more about testing in React"
  );

  // const [message2, setMessage2] = useState(
  //   "Let's learn more about testing in React"
  // );

  return (
    <>
      <div className="w-screen h-dvh bg-zinc-700 items-center flex justify-center flex-col shadow-sm">
        <h1 className="text-white text-[60px] font-bold">Hello world!</h1>
        <p className="text-[40px] font-bold shadow-sm text-purple-400">
          {changeButton}
        </p>
        <button
          onClick={() => {
            setChangeButton("mudei a frase");
          }}
          className="bg-green-400 rounded border-none w-[150px] h-[30px] font-bold text-white hover:bg-green-600"
        >
          Change message
        </button>
        <hr />
      </div>
      {/* <div className="w-screen h-dvh bg-zinc-700 items-center flex justify-center flex-col shadow-sm">
        <p className="text-[40px] font-bold shadow-sm text-purple-400">
          {message2}
        </p>
        <Button
          onClick={() => {
            setMessage2("mudei a frase");
          }}
        >
          Change message
        </Button>
      </div> */}
      <div>
        <OnlyHookForm />
      </div>
    </>
  );
}

export default App;
