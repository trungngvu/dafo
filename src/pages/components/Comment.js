import React from "react";
const YourComponent = ({ product, billId }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //     const response = await axios.post(/api/review/store, {
    //         billId: billId,
    //         productId: productId,
    //         comment: comment,
    //         rating: rating
    //     });

    //     console.log('Review submitted:', response.data);
    // } catch (error) {
    //     console.error('Error submitting review:', error);
    // }
  };

  return (
    <div>
      <h1 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Comment for "{product.name}"
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            name="comment"
            rows="4"
            cols="50"
            placeholder="Enter your comment"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="point"
          >
            Rating (0-10)
          </label>
          <input
            type="number"
            name="point"
            id="point"
            min="0"
            max="10"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default YourComponent;
