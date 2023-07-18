import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import { useAppSelector } from "../redux/hook";

const Navbar = () => {
  const navMenu = [
    {
      route: "Home",
      url: "/",
    },
    {
      route: "About",
      url: "/",
    },
    {
      route: "All Books",
      url: "/all-books",
    },
  ];

  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <TopNavbar />

      <hr className="border-t border-gray-200"></hr>
      <nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navMenu?.map((item) => (
                <li>
                  <Link
                    to={item.url}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg"
                  >
                    {item.route}
                  </Link>
                </li>
              ))}
              {user.email && (
                <li>
                  <Link
                    to={"/add-book"}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg"
                  >
                    Add New Book
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
