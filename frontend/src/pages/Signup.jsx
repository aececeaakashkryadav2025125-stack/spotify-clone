import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  signupUser,
} from "../api/authApi";

function Signup() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup =
    async () => {

      try {

        setLoading(true);

        const userData = {

          name,

          email,

          password,
        };

        const response =
          await signupUser(
            userData
          );

        console.log(
          response
        );

        alert(
          "Signup Successful"
        );

        navigate("/login");

      } catch (error) {

        console.log(
          error
        );

        alert(
          "Signup Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      <div className="bg-[#181818] p-8 rounded-lg w-full max-w-md shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-center">

          Signup

        </h1>

        <div className="space-y-5">

          {/* Name */}
          <input
            type="text"

            placeholder="Name"

            value={name}

            onChange={(e) =>
              setName(
                e.target.value
              )
            }

            className="w-full p-3 rounded bg-[#242424] outline-none"
          />

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

          {/* Button */}
          <button
            onClick={
              handleSignup
            }

            disabled={loading}

            className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded font-semibold"
          >

            {loading
              ? "Creating..."
              : "Create Account"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Signup;