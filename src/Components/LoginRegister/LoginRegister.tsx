import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const navigate = useNavigate();
  const [test, setTest] = useState<boolean>(false);

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

  // console.log(Object.keys(errors));

  return (
    <div className="bg-gray1 h-screen flex items-center justify-between">
      <div className="bg-dark w-500">dddddd</div>
      <div className="bg-white w-2/6 h-5/6 mr-36 pt-10 pb-10 rounded-lg">
        <div className="flex items-center grid justify-center pt-6">
          <div className="flex items-center grid justify-items-center gap-10">
            <img className="w-10" src="src/assets/star-login.svg" alt="" />
            <div className="font-bold tracking-widest text-2xl">
              Welcome to Name!
            </div>
          </div>
          <div className="flex justify-around pt-20">
            <Button
              className=" font-medium focus:border-b text-lg "
              onClick={() => setTest(false)}
            >
              Log in
            </Button>
            <Button
              className="font-medium focus:border-b text-lg"
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
                navigate("/project");
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
                <small>Name is required.</small>
              )}

              {errors.name?.type === "minLength" && (
                <small>The Name should have at least 2 characters.</small>
              )}

              {errors.name?.type === "maxLength" && (
                <small>The Name should have at most 30 characters.</small>
              )}
            </div>

            <input
              {...register("email", {
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: (
                    <span className="text-red text-xs">
                      Enter a valid email.{" "}
                    </span>
                  ),
                },
                required: true,
              })}
              className="message:text-red mt-5 border-b text-sm outline-none placeholder:opacity-60 "
              type="email"
              placeholder="Email"
            />
            {errors.email && <span>{errors?.email.message}</span>}

            {errors.email?.type === "required" && (
              <small className="text-red">Email is required.</small>
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
                <small>Password is required.</small>
              )}

              {errors.password?.type === "minLength" && (
                <small>The Password should have at least 6 characters.</small>
              )}

              {errors.password?.type === "maxLength" && (
                <small>The Password should have at most 16 characters.</small>
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
                  <small className="text-red">
                    Confirm Password is required.
                  </small>
                )}{" "}
              </>
            )}

            <Button className="italic text-xs mt-2 flex start">
              {" "}
              Forgot password?
            </Button>

            <Button
              className="bg-dark text-white rounded-full mt-10 pt-2 pb-2"
              // image={test ? "^" : "$"}
              type="submit"
            >
              {test ? "Sign Up" : "Log In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
