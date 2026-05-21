import {
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  auth,
  provider,
} from "../firebase";

const Login = ({
  user,
  setUser,
}) => {

  // LOGIN
  const login = async () => {

    try {

      const result =
        await signInWithPopup(
          auth,
          provider
        );

      setUser(result.user);

    } catch (error) {

      console.log(error);

    }
  };

  // LOGOUT
  const logout = async () => {

    await signOut(auth);

    setUser(null);
  };

  return (
    <div>

      {user ? (

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <img
            src={user.photoURL}
            alt=""
            className="
              w-10
              h-10
              rounded-full
            "
          />

          <button
            onClick={logout}
            className="
              bg-red-500
              px-4
              py-2
              rounded-full
              text-white
            "
          >
            Logout
          </button>

        </div>

      ) : (

        <button
          onClick={login}
          className="
            bg-green-500
            text-black

            px-5
            py-2

            rounded-full

            font-bold
          "
        >
          Login with Google
        </button>

      )}

    </div>
  );
};

export default Login;