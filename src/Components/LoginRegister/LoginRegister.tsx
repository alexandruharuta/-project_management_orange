import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [test, setTest] = useState<boolean>(false);
  console.log(test);

  return (
    <>
      <div className="flex items-center grid justify-center">
        <div>Welcome to Name!</div>
        <div className="flex justify-around">
          <Button onClick={() => setTest(false)}>Log in</Button>
          <Button onClick={() => setTest(true)}>Sign up</Button>
        </div>

        <div>
          <p>Name</p>
          <input className="border-b" type="text" />
          <p>Email</p>
          <input className="border-b" type="text" />
          <p>Password</p>
          <input className="border-b" type="text" />
          {test && (
            <>
              <p>Confirm password</p>
              <input className="border-b" type="text" />{" "}
            </>
          )}
        </div>

        <Button onClick={() => navigate("/project")} image={test ? "^" : "$"}>
          {test ? "Sign up" : "Log in"}
        </Button>
      </div>

      <div></div>
    </>
  );
}
