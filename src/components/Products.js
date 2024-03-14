import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom-hook/usefetch";
import Pagination from "./Pagination";

function Products() {
  const [page, setPage] = useState(1);
  const { loading, response, error } = useFetch(`https://fakestoreapi.com/products`);
  const [searchQuery, setSearchQuery] = useState("");
  
  let res = response
  const limit = 5;

  const indexOfLastRecord = page * limit;
  const indexOfFirstRecord = indexOfLastRecord - limit;

  let currentRecords = res.slice(indexOfFirstRecord, indexOfLastRecord);

  if (searchQuery) {
      currentRecords = currentRecords.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const totalPage = 4; 

  if (loading) {
    return( 
    <div className="loading">
      <h2> Loading... </h2> 
    </div>
    )
  }

  if (!loading && error) {
    return <>Error...</>;
  }

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePageBtn = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); 
  };

  return (
    <div className="card_con">
      <div className="header">
        <h1> PRODUCTS </h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products..."
        />
      </div>
      <div className="cards">
        {currentRecords?.map((product) => (
          <div key={product.id} className="card">
            <div className="picture">
              <img className="image" src={product.image} alt="profile picture" />
            </div>
            <div className="info">
              <h4>{product.title}</h4>
              <Link className="link" to={`/users/user/${product.id}`} state={product}>
                <small>Click for user details</small>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="onClick_btn" onClick={handlePrev} disabled={page <= 1}>
          Prev
        </button>
        <Pagination className="pagination" totalPage={totalPage} handlePageBtn={handlePageBtn} />
        <button className="onClick_btn" onClick={handleNext} disabled={page >= totalPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;

