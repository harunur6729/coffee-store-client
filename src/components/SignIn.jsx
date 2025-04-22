import React, { useContext } from "react";
import { AuthContext } from "../Poroviders/AuthProvider";

const SignIn = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        //update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`https://coffee-store-server-eight-hazel.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("sign in info updated in db", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email, password);
  };
  return (
    <div className="flex justify-center  items-center min-h-screen bg-slate-200">
      <form className="w-1/2 " onSubmit={handleSignIn}>
        <h1 className="text-center text-3xl font-bold text-black p-5">
          Sing In
        </h1>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label text-2xl">Email</label>
              <input
                type="email"
                className="input w-full p-6 text-2xl"
                placeholder="Email"
                name="email"
              />
              <label className="fieldset-label text-2xl">Password</label>
              <input
                type="password"
                className="input w-full text-2xl"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 text-2xl">SignIn</button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
