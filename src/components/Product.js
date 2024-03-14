import { React } from "react";
import { useLocation, Outlet } from "react-router-dom";

function Product() {
  const { state } = useLocation();
  console.log("from user", state);
  const picture = `${state.image}`;
  const name = `${state.title}`;
  const description = `${state.description}`;
  const price = `${state.price}`;
  const count = `${state.rating.rate}`;
  return (
    <>
      <Outlet />
      <div className="userCard">
        <div className="userCard_pic">
          <img className="image" src={picture} alt="user image" />
        </div>
        <div className="userCard_info">
          <h4> {name} </h4>
          <div className="description">
           <b>Description:</b> {description}
          </div>
          <small className="price">
          <b>Price:</b>  {price}
          </small>
          <small className="rate"> <b>Rate:</b> {count} </small>
        </div>
      </div>
    </>
  );
}

export default Product;
