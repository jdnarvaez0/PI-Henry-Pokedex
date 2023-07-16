import React from "react";
import "./Pagination.css";

const Paginado = ({ pokesPerPage, allPokes, paginado, currentPage }) => {
  const pagesNumber = [];
  const maxPage = Math.ceil(allPokes / pokesPerPage);
  for (let i = 1; i <= maxPage; i++) {
    pagesNumber.push(i);
  }

  return (
    <div className="pagination_container">
      {pagesNumber &&
        pagesNumber.map((num) => {
          return (
            <div className="">
              <p className="pagination_btn" key={num}>
                {currentPage === num ? (
                  <a onClick={() => paginado(num)}>{num}</a>
                ) : (
                  <a onClick={() => paginado(num)}>{num}</a>
                )}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Paginado;
