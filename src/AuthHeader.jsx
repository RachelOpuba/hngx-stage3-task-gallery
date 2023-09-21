// import logo from "../asset/FlexGig.png";
// import bell from "../asset/Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import profile from "./assets/profile.png";
import { BiSearch } from "react-icons/bi";

// C:\Users\Mrs. Rachel Opuba\Desktop\flex-gig\Frontend\flexgig-client\public\asset\FlexGig.png
//Frontend\flexgig-client\public\asset\FlexGig.png

const AuthHeader = ({ setSearchQuery }) => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const dynamicStyle = user
    ? { justifyContent: "space-between" }
    : { justifyContent: "space-between" };

  return (
    <>
      <div
        className="absoluten bg-white hover:bg-black top-0 left-0 w-full max-w-[1441px] shadow border h-[100px] border-b-2 flex    items-center z-20 px-2 md:px-[40px] mx-auto"
        style={dynamicStyle}
      >
        {" "}
        <p className="text-xl md:text-3xl font-bold text-blue-500 italic">
          GLrina
        </p>
        {user ? (
          <div className="h-[46px] rounded-[48px] w-[50%] md:w-[535px] border bg-[#f8fafc]  mx-4 md:mx-16 flex justify-between items-center px-4">
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-grey bg-transparent  outline-0"
              onChange={handleSearch}
            />
            <BiSearch className="text-grey text-lg" />
          </div>
        ) : (
          ""
        )}
        {user ? (
          <div className="hidden md:flex gap-1 justify-center items-center">
            {" "}
            <img src={profile} alt="Profile" className="h-12" />
            <p className="text-sm text-primary font-medium px-2 lg:px-4 me-6">
              Welcome User
            </p>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="py-2 px-2 md:px-6 rounded bg-blue-500 text-white font-semibold "
          >
            Logout
          </button>
        ) : (
          <div>
            <Link
              to="/signup"
              className="py-2 px-6 rounded bg-blue-500 text-white font-semibold ms-6"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="py-2 px-6 rounded bg-blue-500 text-white font-semibold ms-6"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthHeader;
