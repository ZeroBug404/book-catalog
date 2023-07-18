/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { Link } from "react-router-dom";
import bookImg from "../../assets/25.jpg";
import { useUpdateFeatureMutation } from "../../redux/features/book/bookApi";

const BookCard = ({ book }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const [wishList, setWishList] = useState(false);
  const [readingList, setReadingList] = useState(false);
  const [finishedReading, setFinishedReading] = useState(false);

  const [updateFeature] = useUpdateFeatureMutation();

  const handleWishlist = () => {
    const options = {
      id: book._id as string,
      data: {
        wishlist: !wishList,
      },
    };

    updateFeature(options);
    setWishList(true)
  };
  const handleReadinglist = () => {
    const options = {
      id: book._id as string,
      data: {
        readinglist: !readingList,
      },
    };

    updateFeature(options);
    setReadingList(true)
  };
  const handleFinished = () => {
    const options = {
      id: book._id as string,
      data: {
        finished: !finishedReading,
      },
    };

    updateFeature(options);
    setFinishedReading(true)
  };

  return (
    <div className="border-l px-5 border-r mb-8">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/book-details/${book._id}`}>
          <img src={bookImg} alt="" className="w-48 rounded-xl" />
        </Link>
        {isHovered && (
          <div className="absolute top-5 ml-2 flex flex-col">
            <div>
              {!wishList ? (
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2 -translate-y-1/2 transform translate-x-0 opacity-100 text-white mt-3 font-semibold"
                  onClick={handleWishlist}
                >
                  Add to Wishlist
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2 -translate-y-1/2 transform translate-x-0 opacity-100 text-white mt-3 font-semibold text-sm"
                  onClick={handleWishlist}
                >
                  Remove from Wishlist
                </button>
              )}
            </div>
            <button
              className="bg-red-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2  -translate-y-1/2 transform translate-x-0 opacity-100 text-white my-3 font-semibold"
              onClick={handleReadinglist}
            >
              Plan to read
            </button>
            <button
              className="bg-green-500 hover:bg-blue-600 transition-all duration-300 rounded-full p-2   -translate-y-1/2 transform translate-x-0 opacity-100 text-white font-semibold"
              onClick={handleFinished}
            >
              Finished reading
            </button>
          </div>
        )}
      </div>
      <Link to={`/book-details/${book._id}`}>
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
