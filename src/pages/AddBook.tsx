import { useState } from "react";
import { useAddNewBookMutation } from "../redux/features/book/bookApi";
import { toast } from "react-toastify";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    reviews: [],
  });

  const [postBookData, { isLoading, isError, isSuccess }] =
    useAddNewBookMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
      publicationDate: formData.publicationDate,
      reviews: [],
    };

    postBookData(options);
    setFormData({
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
      reviews: [],
    });

    toast.success('New Book Added')
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-md bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add New Book</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter book title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Enter author name"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="genre"
          >
            Genre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="genre"
            type="text"
            placeholder="Enter genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="publicationDate"
          >
            Publication Date
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="publicationDate"
            type="text"
            placeholder="1997-01-28"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            type="submit"
            style={{ backgroundColor: "blue" }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;