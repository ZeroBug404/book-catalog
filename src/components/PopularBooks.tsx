/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Link } from "react-router-dom";
import { useGetLatestBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";
import BookCard from "./ui/BookCard";

const PopularBooks = () => {
  const { data } = useGetLatestBooksQuery(undefined);

  return (
    <div className="px-6 py-5">
      <div className="flex justify-between items-center gap-5 mb-10">
        <div>
          <h3 className="text-5xl font-semibold">Latest Top Ten</h3>
        </div>
        <div className="px-10 mx-10">
          <hr
            className="border-t border-gray-200"
            style={{ width: "60vw" }}
          ></hr>
        </div>
        <div>
          <button
            className="rounded-full bg-blue-500 px-6 py-2 text-white 
         font-semibold"
          >
            <Link to={'/all-books'}>
              View All
            </Link>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-y-3">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
