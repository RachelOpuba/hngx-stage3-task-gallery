import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div
        className="h-[100vh] py-40 flex justify-center items-center"
        style={{ backgroundImage: "linear-gradient(115deg, #05297d, #7e506f)" }}
      >
        <div className=" ">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg ">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1687360441221-ff5143d5cd5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
              }}
            >
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">
                  Start your photography journey today. Sign up for free and
                  become a part of our vibrant photography community.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Signup</h2>
              <p className="mb-4">
                Create your account. It’s free and only takes a few minutes
              </p>
              <form onSubmit={handleSubmit}>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>

                {/* <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" />
                  <span className="ps-1">
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div> */}

                <div className="mt-5">
                  <button className="w-full bg-purple-500 py-3 text-center text-white">
                    Register Now
                  </button>
                </div>
                <div>
                  <p className=" pt-5">
                    Already have and account?{" "}
                    <Link to="/login" className="text-purple-500 font-semibold">
                      Login{" "}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
