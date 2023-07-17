import { signOut } from "firebase/auth";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import FilterOption from "./ui/FilterOption";
import SearchForm from "./ui/SearchForm";

const TopNavbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };
  return (
    <>
      <div className="flex justify-between w-full px-8 py-5 items-center">
        {/* Filter */}
        <div>
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-5">
          <FilterOption />
          <SearchForm />
        </div>

        <div className="flex gap-4 items-center justify-between">
          <div>
            <BsHandbag className="text-2xl text-blue-800" />
          </div>
          <div className="border-l border-gray-300 h-8"></div>
          <div>
            {!user.email && (
              <>
                <Link to="/login">
                  <button className="bg-blue-500 rounded-lg px-4 py-2 text-sm  hover:bg-bule-500 text-white font-semibold">
                    Login
                  </button>
                </Link>
              </>
            )}
            {user.email && (
              <button
                className="bg-blue-500 rounded-lg px-4 py-2 text-sm  hover:bg-bule-500 text-white font-semibold"
                onClick={handleLogout}
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
