import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductReview = ({ rating, time, content, username }) => {
  let stars = [];
  let maxScore = 5;
  for (let i = 1; i < rating / 2; i++) {
    stars.push(1);
  }
  for (let i = rating / 2; i < maxScore; i++) {
    stars.push(0);
  }
  return (
    <div class="product-comment-main border-b border-black py-4">
      <div class="product-comment-author">{username}</div>
      <div class="repeat-purchase-con">
        <div class="flex items-center">
          {stars.map((item, i) =>
            item === 1 ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
          )}
        </div>
      </div>
      <div class="product-rating-time my-2 text-sm text-gray-500">{time}</div>
      <div class="relative my-2 font-sm leading-6 text-black w-full">
        {content}
      </div>
    </div>
  );
};
export default ProductReview;
