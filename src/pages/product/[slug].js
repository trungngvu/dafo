import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../components";
import { useStateContext } from "@/context/StateContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getAllProducts, getProductById } from "@/utils/api";
import ProductReview from "../components/ProductReview";
import Loading from "../components/Loading";
const ProductDetail = ({ product, relatedProducts }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { qty, increaseQuantity, decreaseQuantity, addToCart } =
    useStateContext();
  // const product = products.find((product) => product.slug === parseInt(slug));
  useEffect(() => {
    setIsLoading(false);
  }, [product]);
  let stars = [];
  let maxScore = 5;
  for (let i = 1; i < product.average_rating / 2; i++) {
    stars.push(1);
  }
  for (let i = product.average_rating / 2; i < maxScore; i++) {
    stars.push(0);
  }
  const handleBuyNow = (product, quantity) => {
    const success = addToCart(product, quantity);
    if (success === 1) {
      router.push("/order");
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={product.images[index]?.link}
              alt={product.id}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {product.images.map((item, i) => (
              <img
                src={item?.link}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            {stars.map((item, key) =>
              item === 1 ? (
                <AiFillStar key={key} />
              ) : (
                <AiOutlineStar key={key} />
              )
            )}
            <p>{product.average_rating}</p>
          </div>
          <h4>Details: </h4>
          <p>{product.content}</p>
          <p className="price"> $ {product.price}</p>
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decreaseQuantity}>
                -
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={increaseQuantity}>
                +
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              className="add-to-cart"
              onClick={() => addToCart(product, qty)}
            >
              Add to cart
            </button>
            <button
              className="buy-now"
              onClick={() => handleBuyNow(product, qty)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {relatedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 ">
        <Tabs defaultIndex={1}>
          <TabList>
            {["Description", "Information", "Reviews"].map((item, i) => (
              <Tab key={i}>
                <div className=" px-10 font-mono">{item}</div>
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <h2>Description</h2>
          </TabPanel>
          <TabPanel>
            <h2>Information</h2>
          </TabPanel>
          <TabPanel>
            <div>
              <div className="product-detail-desc review-container">
                <div className="summary">
                  <h3 className="price inline-block">Product Ratings</h3>
                </div>
                <div className="product-rating-list w-full md:max-w-7xl">
                  <div className="product-comment-list">
                    <div className="w-full px-3 py-2 items-start">
                      {product.reviews.length > 0 &&
                        product.reviews.map(({ id, content, rating }) => (
                          <ProductReview
                            key={id}
                            content={content}
                            rating={rating}
                            username={"hello"}
                          />
                        ))}
                      {product.reviews.length == 0 && (
                        <div className="border-b border-black text-xl font-medium py-5 flex justify-center mx-auto">
                          No comment
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;

export async function getStaticProps({ params }) {
  let relatedProducts = await getAllProducts();
  let product = await getProductById(params.slug);
  return {
    props: {
      product: product.product,
      relatedProducts: relatedProducts.products,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const res = await getAllProducts();
  const paths = res.products.map((item) => ({
    params: { slug: item.id.toString() },
  }));

  return { paths, fallback: true };
}
