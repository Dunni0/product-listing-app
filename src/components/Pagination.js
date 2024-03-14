import React from "react";


function Pagination({ totalPage, handlePageBtn }) {
  return (
    <>
    <div className="pagination">
      {Array.from({ length: totalPage }, (value, index) => index + 1).map(
        (each) => {
          return <button key={each} className="pagination__item" onClick={()=> handlePageBtn(each)}> {each} </button>;
        }
      )}
    </div>
    </>
  );
}

export default Pagination