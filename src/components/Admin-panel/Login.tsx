import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="bg-black  h-screen flex justify-center items-center ">
      <button
        className="bg-white rounded text-black px-8 py-2 flex items-center gap-2"
        onClick={() => signIn("google")}
      >
        <FcGoogle size={40}></FcGoogle> Sign with Google
      </button>
    </div>
  );
};

export default Login;
