import { useState } from "react";
import { Link } from "react-router-dom";
import data from   '../../services/dataProjects'

export default function Pagination() {
  
  const itemsLimitPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsLimitPage);
  const startIndex = (currentPage - 1) * itemsLimitPage;
  const endIndex = startIndex + itemsLimitPage;
  const currentItems = data.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  
  return (
    <>
      <div className="container-projects">
        {currentItems.map((item) => (
          <div key={item.id} className="content-item-projects">
            <h1>{item.name}</h1>
            <Link to={`/project/${item.id}`}>
              <button>Detalhes</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button key={pageNumber} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Proxima
        </button>
      </div>
    </>
  );
}
