/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";

const FilterOption = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGenreDoubleDropdownOpen, setIsGenreDoubleDropdownOpen] =
    useState(false);
  const [isYaerDoubleDropdownOpen, setIsYearDoubleDropdownOpen] =
    useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleGenreDoubleDropdown = () => {
    setIsGenreDoubleDropdownOpen(!isGenreDoubleDropdownOpen);
  };
  const toggleYearDoubleDropdown = () => {
    setIsYearDoubleDropdownOpen(!isYaerDoubleDropdownOpen);
  };

  const {
    data: booksData,
    isLoading,
    error,
  } = useGetBooksQuery({ searchData: "" });

  const [checkboxValue, setCheckboxValue] = useState("");

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setCheckboxValue(event.target.nextSibling.textContent);
    } else {
      setCheckboxValue("");
    }
  };
  // console.log(checkboxValue);

  return (
    <div>
      <div className="relative">
        <button
          id="multiLevelDropdownButton"
          className="w-32 bg-blue-500 text-white flex justify-center items-center gap-1 py-2 rounded-full font-semibold text-lg"
          onClick={toggleDropdown}
        >
          <FiFilter />
          Filter
        </button>
        {isDropdownOpen && (
          <div
            id="dropdown"
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="multiLevelDropdownButton"
            >
              <li>
                <button
                  id="doubleDropdownButton"
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleGenreDoubleDropdown}
                >
                  Genre
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
                {isGenreDoubleDropdownOpen && (
                  <div
                    id="doubleDropdown"
                    className="absolute left-8 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      {booksData?.data?.data?.map((book) => (
                        <li>
                          <div className="flex items-center">
                            <input
                              id="checkbox-item-3"
                              type="checkbox"
                              onChange={handleCheckboxChange}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              htmlFor="checkbox-item-3"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {book.genre}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <button
                  id="doubleDropdownButton"
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleYearDoubleDropdown}
                >
                  Year
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
                {isYaerDoubleDropdownOpen && (
                  <div
                    id="doubleDropdown"
                    className="absolute left-8 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <div className="flex items-center">
                          <input
                            id="checkbox-item-3"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="checkbox-item-3"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Fiction
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="checkbox-item-3"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="checkbox-item-3"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Story
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterOption;
