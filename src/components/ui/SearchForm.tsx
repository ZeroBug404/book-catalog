/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { setSearchData } from "../../redux/features/book/bookSlice";
import { useAppDispatch } from "../../redux/hook";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchData(searchQuery));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex" style={{ width: "30rem" }}>
        <input
          className="block w-full p-3 pl-4 text-base font-semibold border-none text-gray-900 rounded-full bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none outline-none"
          placeholder="Search Books..."
          value={searchQuery}
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 right-5 flex items-center cursor-pointer">
          <button type="submit">
            <BsSearch className="text-lg text-blue-500" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
