import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../slice/cartSlice";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="p-4">
      {product ? (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-600">${product.price}</p>
          <p className="mt-2">{product.description}</p>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
