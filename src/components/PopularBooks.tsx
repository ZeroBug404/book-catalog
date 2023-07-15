import BookCard from "./ui/BookCard";

const PopularBooks = () => {
  return (
    <div className="px-6 py-5">
      <div className="flex justify-between items-center gap-5 mb-10">
        <div>
          <h3 className="text-5xl font-semibold">Popular Books</h3>
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
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-y-3">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default PopularBooks;
