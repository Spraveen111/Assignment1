import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  const { details } = props;
  const { title, price, images, id } = details;

  return (
    <li className="productcard">
      <img src={images} alt="product" className="productCardImage" />
      <h1 className="title">{title}</h1>
      <h1 className="price">${price}</h1>
      <div>
        {/* <Link to={'singleProduct/${id}'}></Link> */}
        <NavLink to={`singleProduct/${id}`}>
          <button>display</button>
        </NavLink>
        <button type="button" className="button">
          View{" "}
        </button>
        <button type="button" className="button">
          AddToCart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
