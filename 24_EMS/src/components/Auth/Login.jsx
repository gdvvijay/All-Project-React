import { useState } from "react";

export default function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail('')
    setPassword('')
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            className="border-2 border-emerald-600 py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 rounded-full"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            className="border-2 border-emerald-600 py-4 px-5 text-xl text-white outline-none bg-transparent mt-3 placeholder:text-gray-400 rounded-full"
            placeholder="Enter your Password"
          />
          <button className="w-full border-none mt-5 bg-emerald-600 py-4 px-5 text-xl text-white outline-none  placeholder:text-white rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
