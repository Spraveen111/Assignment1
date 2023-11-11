import "./index.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ItemDetails = (props) => {
  const [product, setProduct] = useState({});
  const { itemID } = useParams();

  const getFormattedSimilarData = (data) => ({
    title: data.title,
    price: data.price,
    images: data.images[0],
    id: data.id,
  });

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const detailsResponse = response.data;

        // Use find to get the first product with matching ID
        const foundProduct = detailsResponse.products.find(
          (x) => x.id === itemID
        );

        if (foundProduct) {
          console.log("title", foundProduct.title);
          getFormattedSimilarData(foundProduct);
          setProduct(foundProduct);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    callApi();
  }, [itemID]);

  console.log(product);

  return (
    <li className="productcard">
      {/* <img src={product?.images[0]} alt="product" className="productCardImage" /> */}
      <h1 className="title">{product.title}</h1>
      <h1 className="price">${product.price}</h1>
      <h1 className="title">{itemID}</h1>

      <div>
        <button type="button" className="button">
          AddToCart
        </button>
      </div>
    </li>
  );
};

export default ItemDetails;
