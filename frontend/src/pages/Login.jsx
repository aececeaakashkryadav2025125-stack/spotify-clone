import {
  useContext,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  AuthContext,
} from "../context/AuthContext";

import {
  loginUser,
} from "../api/authApi";

function Login() {

  const navigate =
    useNavigate();

  const {
    setUser,
  } = useContext(
    AuthContext
  );

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async () => {

      try {

        setLoading(true);

        const userData = {

          email,

          password,
        };

        const response =
          await loginUser(
            userData
          );

        if (

          response !==
          "Invalid Credentials"

        ) {

          /* Save JWT Token */

          localStorage.setItem(

            "token",

            response
          );

          /* Save User */

          const loggedInUser = {

            email,
          };

          setUser(
            loggedInUser
          );

          localStorage.setItem(

            "user",

            JSON.stringify(
              loggedInUser
            )
          );

          alert(
            "Login Successful"
          );

          navigate("/");

        } else {

          alert(
            "Invalid Credentials"
          );
        }

      } catch (error) {

        console.log(
          error
        );

        alert(
          "Login Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      <div className="bg-[#181818] p-8 rounded-lg w-full max-w-md shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-center">

          Login

        </h1>

        <div className="space-y-5">

          {/* Email */}
          <input
            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="w-full p-3 rounded bg-[#242424] outline-none"
          />

          {/* Password */}
          <input
            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            className="w-full p-3 rounded bg-[#242424] outline-none"
          />

          {/* Login Button */}
          <button
            onClick={
              handleLogin
            }

            disabled={loading}

            className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded font-semibold"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;