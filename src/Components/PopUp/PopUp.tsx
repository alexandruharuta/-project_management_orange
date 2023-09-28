import { useState } from "react";
import Button from "../Button";

interface PopUp {
  children: any;
  getEmail: any;
  setGetEmail: any;
  setShowPopUp: any;
}

function PopUp({ children, getEmail, setGetEmail, setShowPopUp }: PopUp) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validEmail = getEmail.match(regex);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    console.log(getEmail);
    setTimeout(() => {
      setLoading(true);
      setGetEmail("");
    }, 1000);
    setLoading(false);
  };
  return (
    <div className="flex-col absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] w-[260px] bg-white h-[450px] mt-24 ">
      <div>
        <div className="justify-center ">
          <div className="grid">
            <span className="font-semibold text-xl mt-10 text-center">
              Forgot Password?
            </span>
            <span className="opacity-80 mt-5 text-center text-sm">
              Enter your email below to receive password reset instructions.
            </span>
          </div>
          {loading ? <div>{children}</div> : <div>loading...</div>}
          <Button
            disabled={validEmail !== null ? false : true}
            onClick={handleSubmit}
            className="bg-sky0 text-white rounded-full mt-10 pt-2 pb-2 w-[100%]"
          >
            Send
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setShowPopUp(false)}
            className="text-xs italic mt-4 justify-items-center"
          >
            Back to Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
