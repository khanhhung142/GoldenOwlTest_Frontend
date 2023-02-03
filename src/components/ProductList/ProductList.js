import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllShoes } from "../../app/actions/ShoesAction"
export default function ProductList(props) {
  const dispatch = useDispatch();
  const { shoes, error } = useSelector((state) => state.ShoesReducer);
  React.useEffect(() => {
    dispatch(getAllShoes());
  }, []);
  console.log(shoes)
  if (shoes.length != 0) {
    return (
      <div className="card">
        <div className="card__top">
          <img className="card__top__logo" src="./assets/nike.png" alt="..." />
        </div>
        <div className="card__title">Our Products</div>
        <div className="card__body">
          {shoes.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card__top">
        <img className="card__top__logo" src="./assets/nike.png" alt="..." />
      </div>
      <div className="card__title">Our Products</div>
      <div className="card__body">
        <p>Loading...</p>
        <p>Maybe you forget to run the server first</p>
      </div>
    </div>
  );

}
