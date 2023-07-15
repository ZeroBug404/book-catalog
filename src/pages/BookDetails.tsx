import book from "../assets/25.jpg";

const BookDetails = () => {
  return (
    <div className="px-6 flex gap-8">
      <div className="border rounded-lg w-1/3 p-5">
        <img src={book} alt="" className="" width={'100%'}/>
      </div>
      <div className="border p-6 rounded-lg">
        <div>
          <p className="font-semibold text-4xl text-gray-700 mb-5">
            Life Flight
          </p>
          <p className="text-gray-400">
            Author: <span className="text-gray-700">Misty</span>
          </p>
        </div>
        <div className="border-t px-5 border-r my-3"></div>
        <div>
          <p className="text-blue-600 font-semibold text-2xl">$286.87</p>
          <p className="text-gray-500 my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            culpa sapiente voluptatum animi similique quod quis quaerat dolorem
            repudiandae? Tempore reiciendis blanditiis illo dolorum voluptatum,
            quidem eveniet optio perspiciatis eligendi?
          </p>
        </div>
        <div className="border-t px-5 border-r my-3"></div>
      </div>
    </div>
  );
};

export default BookDetails;
