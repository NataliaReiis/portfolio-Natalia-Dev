import { useState } from "react";
import { Link } from "react-router-dom";
import data from   '../../services/dataProjects'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
    <div className="projects">   
        <div className="title-project">
          <h1>Meus projetos</h1>
          <p>Transformando ideias em realidade, um projeto de cada vez.</p>
        </div>
        <span className="moreDetails">Clique no projeto e confira os detalhes.</span>
        <div className="container-projects">
           {currentItems.map((item) => (
            <Link to={`/project/${item.id}`} key={item.id}>
              <div key={item.id} className="content-item-projects">
                <img src={item.image} alt="" />
              </div>
             </Link>
          ))}
        </div>
      <div className="buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <FaArrowLeft/>
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button key={pageNumber} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
