import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  return (
    <form>
      {/* <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label> */}
      <div className="relative flex" style={{ width: "30rem" }}>
        <input
          //   id="default-search"
          className="block w-full p-3 pl-4 text-base font-semibold border-none text-gray-900 rounded-full bg-gray-50  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none outline-none"
          placeholder="Search Books..."
          required
        />
        <div className="absolute inset-y-0 right-5 flex items-center cursor-pointer">
          <BsSearch className="text-lg text-blue-500" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
