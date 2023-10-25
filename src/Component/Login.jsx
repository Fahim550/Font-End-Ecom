import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/auth.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "./shared/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // e.preventDefult();
    signInWithEmailAndPassword(auth,email,password)
      .then((res) => {
        // Signed in
        // const user = userCredential.user;
        console.log(res);

        setSuccessMsg(
          "New User added successfully ,you will now be automaticlly redirected to login page"
        );
        setEmail(""),
        setPassword(""),
          // setErrorMsg(''),
        //   setTimeout(() => {
            setSuccessMsg("");
            navigate("/home");
        //   }, 2000)
        //   .catch((error) => {
        //     console.log("👍👍👍", error);
        //     setErrorMsg(error.message);
        //   });
      })

      .catch((error) => {
        console.log(error);
        if (error.message == "Firebase:Error (auth/invalid-email).") {
          setErrorMsg("please fill all required fields");
        }
        if (error.message == "Firebase:Error (auth/email-already-in-use).") {
          setErrorMsg("User already exist");
        }
      });

     
  
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-12" >
            {successMsg && (
              <>
                <div className="flex w-100 justify-center bg-slate-200 p-2.5 rounded-md text-lime-400">
                  {successMsg}
                </div>
              </>
            )}
            {errorMsg && (
              <>
                <div className="flex w-100 justify-center bg-slate-200 p-2.5 rounded-md text-red-600">
                  {errorMsg}
                </div>
              </>
            )}
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button onClick={handleLogin}
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Don't have an account yet?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-400"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
