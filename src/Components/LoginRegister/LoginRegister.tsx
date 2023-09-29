import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PopUp from "../PopUp/PopUp";

export default function Register() {
  const navigate = useNavigate();
  const [test, setTest] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [getEmail, setGetEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleForgotPassword = () => {
    setShowPopUp(true);
  };

  // console.log(Object.keys(errors));

  return (
    <div className="bg-gray1 min-h-screen flex items-center justify-end">
      <div className="bg-white w-2/6 h-6/7 mr-36 pt-10 pb-10 rounded-lg flex-end relative">
        <div className="flex items-center grid justify-center pt-6">
          <div className="flex items-center grid justify-items-center gap-10">
            <img className="w-10" src="src/assets/star-login.svg" alt="" />
            <div className="font-bold tracking-widest text-2xl">
              Welcome to Name!
            </div>
          </div>
          <div className="flex justify-around pt-20">
            <Button
              className="font-medium focus:border-b hover:border-btext-lg hover:text-blue-300 ease-in-out duration-300"
              onClick={() => setTest(false)}
            >
              Log in
            </Button>
            <Button
              className="font-medium focus:border-b hover:border-b text-lg hover:text-blue-300 ease-in-out duration-300"
              onClick={() => setTest(true)}
            >
              Sign up
            </Button>
          </div>

          <form
            className="grid pt-10"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              if (!Object.keys(errors).length) {
                navigate("/home");
              }
            })}
          >
            <input
              {...register("name", {
                maxLength: 30,
                minLength: 2,
                required: true,
              })}
              className=" border-b text-sm  outline-none placeholder:opacity-60  "
              type="text"
              placeholder="Name"
            />
            <div className="text-red">
              {errors.name?.type === "required" && (
                <small className="text-xs font-semibold text-red-500">
                  Name is required.
                </small>
              )}

              {errors.name?.type === "minLength" && (
                <small className="text-xs font-semibold text-red-500">
                  The Name should have at least 2 characters.
                </small>
              )}

              {errors.name?.type === "maxLength" && (
                <small className="text-xs font-semibold text-red-500">
                  The Name should have at most 30 characters.
                </small>
              )}
            </div>

            <input
              {...register("email", {
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  // @ts-ignore
                  message: (
                    <span className="text-red text-xs">
                      Enter a valid email.{" "}
                    </span> 
                  ) ,
                },
                required: true,
              })}
              className="message:text-red mt-5 border-b text-sm outline-none placeholder:opacity-60 "
              type="email"
              placeholder="Email"
            />
            {errors.email && <span>{errors?.email.message}</span>}

            {errors.email?.type === "required" && (
              <small className="text-xs font-semibold text-red-500 mt-2">
                Email is required.
              </small>
            )}

            <input
              {...register("password", {
                maxLength: 16,
                minLength: 6,
                required: true,
              })}
              className="mt-5 border-b text-sm outline-none placeholder:opacity-60"
              type="password"
              placeholder="Password"
            />

            <div className="text-red">
              {errors.password?.type === "required" && (
                <small className="text-xs font-semibold text-red-500">
                  Password is required.
                </small>
              )}

              {errors.password?.type === "minLength" && (
                <small className="text-xs font-semibold text-red-500">
                  The Password should have at least 6 characters.
                </small>
              )}

              {errors.password?.type === "maxLength" && (
                <small className="text-xs font-semibold text-red-500">
                  The Password should have at most 16 characters.
                </small>
              )}
            </div>

            {test && (
              <>
                <input
                  {...register("confirm_password", {
                    required: true,
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  className="mt-5 border-b text-sm outline-none placeholder:opacity-60"
                  type="password"
                  placeholder="Confirm Password"
                />{" "}
                {errors.password?.type === "required" && (
                  <small className="text-xs font-semibold text-red-500 mt-2">
                    Confirm Password is required.
                  </small>
                )}{" "}
              </>
            )}

            <Button
              className="italic text-xs mt-2 flex start"
              onClick={handleForgotPassword}
            >
              {" "}
              Forgot password?
            </Button>

            <Button
              className="bg-sky0 text-white rounded-full mt-10 pt-2 pb-2"
              // image={test ? "^" : "$"}
              type="submit"
            >
              {test ? "Sign Up" : "Log In"}
            </Button>
          </form>
        </div>
        {showPopUp && (
          <PopUp
            getEmail={getEmail}
            setGetEmail={setGetEmail}
            setShowPopUp={setShowPopUp}
          >
            <input
              type="email"
              placeholder="Email"
              className=" border-b text-sm  outline-none placeholder:opacity-60 mt-10 w-[100%] "
              value={getEmail}
              onChange={(e: any) => setGetEmail(e.target.value)}
            />
          </PopUp>
        )}
      </div>
    </div>
  );
}
