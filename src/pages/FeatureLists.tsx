/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

const FeatureLists = () => {
  const { searchData } = useAppSelector((state) => state.book);

  const { data } = useGetBooksQuery(
    { searchData },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 3000,
    }
  );
  console.log(data);

  const wishListData = data?.data?.data?.filter(
    (item: { wishlist: boolean }) => item.wishlist === true
  );

  const readingListtData = data?.data?.data?.filter(
    (item: { readinglist: boolean }) => item.readinglist === true
  );

  const finishedReadingtData = data?.data?.data?.filter(
    (item: { finished: boolean }) => item.finished === true
  );

  return (
    <div className="p-8">
      <div>
        <h3 className="font-semibold text-4xl text-center mb-4">
          Features list
        </h3>
      </div>
      <div>
        {/* Wishlist */}
        <div>
          <h4 className="font-semibold text-xl">Wishlist</h4>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Book name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Genre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Published Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishListData?.map((wishlist: any) => (
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {wishlist.title}
                    </th>
                    <td className="px-6 py-4">{wishlist.author}</td>
                    <td className="px-6 py-4">{wishlist.genre}</td>
                    <td className="px-6 py-4">{wishlist.publicationDate}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reading List */}
        <div className="my-10">
          <h4 className="font-semibold text-xl">Reading List</h4>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Book name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Genre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Published Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {readingListtData?.map((readingList: any) => (
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {readingList.title}
                    </th>
                    <td className="px-6 py-4">{readingList.author}</td>
                    <td className="px-6 py-4">{readingList.genre}</td>
                    <td className="px-6 py-4">{readingList.publicationDate}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Finished Reading */}
        <div>
          <h4 className="font-semibold text-xl">Finished Reading</h4>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Book name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Genre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Published Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {finishedReadingtData?.map((finishedReading: any) => (
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {finishedReading.title}
                    </th>
                    <td className="px-6 py-4">{finishedReading.author}</td>
                    <td className="px-6 py-4">{finishedReading.genre}</td>
                    <td className="px-6 py-4">
                      {finishedReading.publicationDate}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureLists;
