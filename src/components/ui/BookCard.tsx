/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import bookImg from "../../assets/25.jpg";
import { IBook } from "../../types/globalTypes";

const BookCard = ({ book }: IBook) => {
  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="border-l px-5 border-r mb-8">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={bookImg} alt="" className="w-48 rounded-xl" />
        {isHovered && (
          <button className="absolute bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2 top-1/2 left-full -translate-y-1/2 transform translate-x-0 opacity-100">
            Button
          </button>
        )}
      </div>
      <div>
        <p className="font-semibold text-lg text-gray-700">{book.title}</p>
        <p className="text-gray-500 text-sm">Emesto Wade</p>
        <p className="text-blue-600 font-semibold text-2xl">$286.87</p>
      </div>
    </div>
  );
};

export default BookCard;
