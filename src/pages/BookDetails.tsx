import { useParams } from "react-router-dom";
import bookImg from "../assets/25.jpg";
import profile from "../assets/profile.png";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetSingleBookQuery(id);

  return (
    <div className="px-6 flex gap-8">
      <div className="border rounded-lg w-1/3 p-5">
        <img src={bookImg} alt="" className="" width={"100%"} />
      </div>
      <div className="border p-6 rounded-lg">
        <div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-4xl text-gray-700 mb-5">
              {data?.data?.title}
            </p>
            <div className="flex gap-2">
              <button
                className="bg-green-500 px-6 py-2 text-white font-semibold rounded-md hover:bg-green-700"
                style={{
                  backgroundColor: '#3DA72F',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#308125'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#3DA72F'; }}
              >
                Edit
              </button>
              <button className="bg-red-500 px-6 py-2 text-white font-semibold rounded-md hover:bg-green-700" style={{
                  backgroundColor: '#DD3C2D',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#AC2F23'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#DD3C2D'; }}>
                Delete
              </button>
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
          <div>
            {data?.data?.reviews?.map((review) => (
              <div className="flex gap-2 mb-5">
                <div>
                  <img
                    src={profile}
                    alt=""
                    className="rounded-full"
                    width={"80rem"}
                  />
                </div>
                <div>
                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquam culpa sapiente voluptatum animi similique quod quis
                    quaerat dolorem repudiandae? Tempore reiciendis blanditiis
                    illo dolorum voluptatum, quidem eveniet optio perspiciatis
                    eligendi?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
