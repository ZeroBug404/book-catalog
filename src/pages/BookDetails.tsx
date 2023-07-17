import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import bookImg from "../assets/25.jpg";
import profile from "../assets/profile.png";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, error } = useGetSingleBookQuery(id);

  const [deleteBook, { isBookLoading, isError, isSuccess }] =
    useDeleteBookMutation();

  const [reviewText, setReviewText] = useState("");

  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the reviewText, such as sending it to a server or updating the state in a parent component
    console.log("Review:", reviewText);
    // Reset the input field
    setReviewText("");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBookDelete = () => {
    deleteBook(id);
    setModalIsOpen(false);
    navigate("/all-books");
    toast?.success("Book deleted successfully!");
  };

  return (
    <div className="px-6 flex gap-8">
      <div className="border rounded-lg w-1/3 p-5">
        <img src={bookImg} alt="" className="" width={"100%"} />
      </div>
      <div className="border p-6 rounded-lg w-full">
        <div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-4xl text-gray-700 mb-5">
              {data?.data?.title}
            </p>
            <div className="flex gap-2">
              <button
                className="bg-green-500 px-6 py-2 text-white font-semibold rounded-md hover:bg-green-700"
                style={{
                  backgroundColor: "#3DA72F",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#308125";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#3DA72F";
                }}
              >
                <Link to={`/edit-book/${data?.data?._id}`}>Edit</Link>
              </button>
              <button
                className="bg-red-500 px-6 py-2 text-white font-semibold rounded-md hover:bg-green-700"
                style={{
                  backgroundColor: "#DD3C2D",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#AC2F23";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#DD3C2D";
                }}
                data-modal-target="popup-modal"
                data-modal-toggle="popup-modal"
                onClick={openModal}
              >
                Delete
              </button>

              {modalIsOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <button
                      className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this Book?
                      </h3>
                      <button
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                        onClick={handleBookDelete}
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        onClick={closeModal}
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-400">
            Author: <span className="text-gray-700">{data?.data?.author}</span>
          </p>
          <p className="text-gray-400 my-2">
            Genre: <span className="text-gray-700">{data?.data?.genre}</span>
          </p>
          <p className="text-gray-400">
            Publication Date:{" "}
            <span className="text-gray-700">{data?.data?.publicationDate}</span>
          </p>
        </div>
        <div className="border-t px-5 border-r my-3"></div>
        <div>
          <p className="font-semibold text-xl text-gray-700 mb-5">Reviews</p>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 font-bold" htmlFor="review">
                Write a review:
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                id="review"
                name="review"
                rows="4"
                value={reviewText}
                onChange={handleInputChange}
                placeholder="Enter your review here..."
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md mb-5"
                style={{ backgroundColor: "Blue" }}
              >
                Submit
              </button>
            </form>
          </div>
          {data?.data?.reviews?.map((review) => (
            <div className="flex gap-2 mb-5">
              <div>
                <img
                  src={profile}
                  alt=""
                  className="rounded-full"
                  width={"35rem"}
                />
              </div>
              <div>
                <p className="text-gray-500">{review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
