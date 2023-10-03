import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
  const [test, setTest] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (test && (name.trim() === "" || name.length < 2 || name.length > 30)) {
      setNameError("Name should be 2-30 characters long");
      return;
    }

    if (password.length < 6 || password.length > 16) {
      setPasswordError("Password should be 6-16 characters long");
      return;
    }

    if (test && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    navigate("/mytasks/");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-950 from-10% via-sky-950 to-emerald-950 to-80% flex items-center justify-center">
        <div className="bg-white bg-opacity-30 backdrop-blur-sm w-2/6 h-6/7 py-10 rounded-lg flex-end relative">
          <div className="grid justify-center pt-6">
            <div className="font-bold tracking-widest text-5xl px-16 uppercase">
              {!test ? "Login" : "Register"}
            </div>
            <form className="grid pt-10" onSubmit={handleFormSubmit}>
              {test && (
                <div className="mb-4 w-full">
                  <input
                    className={`border-b px-4 py-2 text-sm rounded-full w-full border-0 outline-none placeholder:opacity-60 font-normal ${
                      nameError && "border-red-500"
                    }`}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {nameError && (
                    <p className="text-red-500 text-xs">{nameError}</p>
                  )}
                </div>
              )}
              <div className="mb-4">
                <input
                  className={`message:text-red px-4 py-2 mt-5 rounded-full w-full border-b text-sm border-0 outline-none placeholder:opacity-60 font-normal ${
                    emailError && "border-red-500"
                  }`}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs">{emailError}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  className={`mt-5 border-b px-4 py-2 rounded-full text-sm w-full border-0 outline-none placeholder:opacity-60 font-normal ${
                    passwordError && "border-red-500"
                  }`}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-xs">{passwordError}</p>
                )}
              </div>

              {test && (
                <div className="mb-4">
                  <input
                    className={`mt-5 border-b px-4 py-2 rounded-full border-0 w-full text-sm outline-none placeholder:opacity-60 font-normal ${
                      confirmPasswordError && "border-red-500"
                    }`}
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {confirmPasswordError && (
                    <p className="text-red-500 text-xs">
                      {confirmPasswordError}
                    </p>
                  )}
                </div>
              )}

              {!test && (
                <button
                  className="italic text-sm my-4 flex items-center justify-end"
                  type="button">
                  Forgot password?
                </button>
              )}

              <button
                className="bg-gradient-to-r from-violet-950 to-gray-700 rounded-full my-4 pt-2 pb-2 font-semibold text-gray-200 hover:text-white"
                type="submit">
                {test ? "Sign Up" : "Log In"}
              </button>

              <div className="flex w-full justify-center items-center mt-2">
                {!test ? "Don't have an account?" : "Already own an account?"}
                <button
                  type="button"
                  className="ml-2 font-bold text-black hover:text-white ease-in-out duration-300"
                  onClick={() => setTest(!test)}>
                  {!test ? "Register" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
