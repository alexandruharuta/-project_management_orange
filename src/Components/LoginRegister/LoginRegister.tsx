import {useState} from "react";
import PopUp from "../PopUp/PopUp";

export default function Register() {
  const [test, setTest] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  // const handleForgotPassword = () => {
  //   setShowPopUp(true);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 from-10% via-sky-950 to-emerald-950 to-80% flex items-center justify-center">
      <div className="bg-white bg-opacity-30 backdrop-blur-sm w-2/6 h-6/7 py-10 rounded-lg flex-end relative">
        <div className="grid justify-center pt-6">
          <div className="font-bold tracking-widest text-5xl px-16 uppercase">
            {!test ? "Login" : "Register"}
          </div>
          <form className="grid pt-10" onSubmit={handleSubmit}>
            {test && (
              <input
                className=" border-b px-4 py-2 text-sm rounded-full border-0 outline-none placeholder:opacity-60 font-normal"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              className="message:text-red px-4 py-2 mt-5 rounded-full border-b text-sm border-0 outline-none placeholder:opacity-60 font-normal"
              type="email"
              placeholder="Email"
            />

            <input
              className="mt-5 border-b px-4 py-2 rounded-full text-sm border-0 outline-none placeholder:opacity-60 font-normal"
              type="password"
              placeholder="Password"
            />

            {test && (
              <>
                <input
                  className="mt-5 border-b px-4 py-2 rounded-full border-0 text-sm outline-none placeholder:opacity-60 font-normal"
                  type="password"
                  placeholder="Confirm Password"
                />
              </>
            )}

            {!test && (
              <button className="italic text-sm mt-2 flex items-center justify-end">
                Forgot password?
              </button>
            )}

            <button
              className="bg-gradient-to-r from-violet-950 to-gray-700 rounded-full mt-4 pt-2 pb-2 font-semibold text-gray-200 hover:text-white"
              type="submit">
              {test ? "Sign Up" : "Log In"}
            </button>
            <div className="flex w-full justify-center items-center mt-2">
              {!test ? "Don't have an account?" : "Already own an account?"}
              <button
                className="ml-2 font-bold text-black hover:text-white ease-in-out duration-300"
                onClick={() => setTest(!test)}>
                {!test ? "Register" : "Login"}
              </button>
            </div>
          </form>
        </div>
        {/* {showPopUp && (
          <PopUp
            getEmail={getEmail}
            setGetEmail={setGetEmail}
            setShowPopUp={setShowPopUp}>
            <input
              type="email"
              placeholder="Email"
              className=" border-b text-sm rounded-full outline-none placeholder:opacity-60 mt-10 w-[100%] "
              value={getEmail}
              onChange={(e: any) => setGetEmail(e.target.value)}
            />
          </PopUp>
        )} */}
      </div>
    </div>
  );
}
