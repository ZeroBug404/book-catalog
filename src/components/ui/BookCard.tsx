/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { Link } from "react-router-dom";
import bookImg from "../../assets/25.jpg";
import { IBook } from "../../types/globalTypes";

const BookCard = ({ book }: IBook) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(book._id);

  return (
    <div className="border-l px-5 border-r mb-8">
      <Link to={`/book-details/${book._id}`}>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={bookImg} alt="" className="w-48 rounded-xl" />
          {isHovered && (
            <div className="absolute top-5 ml-2 flex flex-col">
              <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2   -translate-y-1/2 transform translate-x-0 opacity-100 text-white mt-3">
                Add to Wishlist
              </button>
              <button className="bg-red-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2  -translate-y-1/2 transform translate-x-0 opacity-100 text-white my-3">
                Plan to read
              </button>
              <button className="bg-green-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2   -translate-y-1/2 transform translate-x-0 opacity-100 text-white ">
                Finished reading
              </button>
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-lg text-gray-700">{book.title}</p>
          <p className="text-gray-500 text-sm">{book.author}</p>
          <p className="text-blue-600 font-semibold text-base">{book.genre}</p>
          <p className="text-blue-600 ">{book.publicationDate}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
