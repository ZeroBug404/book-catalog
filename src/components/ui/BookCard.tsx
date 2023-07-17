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
