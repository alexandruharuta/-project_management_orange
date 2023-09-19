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

  console.log(Object.keys(errors));

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
            className="grid pt-10 gap-5"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              if (!Object.keys(errors).length) {
                navigate("/project");
              }
            })}
          >
            <input
              {...register("name", {
                maxLength: 20,
                minLength: 2,
                required: true,
              })}
              className="border-b text-sm  outline-none placeholder:opacity-60  "
              type="text"
              placeholder="Name"
            />

            <input
              {...register("email", {
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Enter a valid email.",
                },
                required: true,
              })}
              className="border-b text-sm outline-none placeholder:opacity-60 message:text-red"
              type="email"
              placeholder="Email"
            />
            {errors.email && <span>{errors?.email.message}</span>}

            <input
              {...register("password", {
                maxLength: 16,
                minLength: 6,
                required: true,
              })}
              className="border-b text-sm outline-none placeholder:opacity-60"
              type="password"
              placeholder="Password"
            />
            {test && (
              <>
                <input
                  {...register("confirm_password", {
                    maxLength: 16,
                    minLength: 6,
                    required: true,
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  className="border-b text-sm outline-none placeholder:opacity-60"
                  type="password"
                  placeholder="Confirm Password"
                />{" "}
              </>
            )}

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
