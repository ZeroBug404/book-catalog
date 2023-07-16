/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import BookCard from "../components/ui/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

const AllBooks = () => {
  const { searchData } = useAppSelector((state) => state.book);

  const { data, isLoading, error } = useGetBooksQuery({ searchData });
  console.log(data);
  
  return (
    <div className="px-6 py-5">
      <div className="flex items-center gap-5 mb-10">
        <div>
          <h3 className="text-5xl font-semibold">All Books</h3>
        </div>
        <div className="px-10 mx-10">
          <hr
            className="border-t border-gray-200"
            style={{ width: "60vw" }}
          ></hr>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-y-3">
        {data?.data?.data?.map((book: IBook) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
