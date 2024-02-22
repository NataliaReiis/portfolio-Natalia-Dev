import { useState } from "react";

export default function Pagination() {
  const data = [
    {
      id: 1,
      name: "Project One",
    },
    {
      id: 2,
      name: "Project two",
    },
    {
      id: 3,
      name: "Project three",
    },
    {
      id: 4,
      name: "Project four",
    },
    {
      id: 5,
      name: "Project five",
    },
    {
      id: 7,
      name: "Project five",
    },
    {
      id: 8,
      name: "Project five",
    },
    {
      id: 9,
      name: "Project five",
    },
    {
      id: 10,
      name: "Project five",
    },
    {
      id: 11,
      name: "Project five",
    },
    {
      id: 12,
      name: "Project five",
    },
    {
      id: 13,
      name: "Project five",
    },
    {
      id: 14,
      name: "Project five",
    },
    {
      id: 15,
      name: "Project five",
    },
    {
      id: 16,
      name: "Project five",
    },
    {
      id: 17,
      name: "Project five",
    },
    {
      id: 18,
      name: "Project five",
    },
    {
      id: 19,
      name: "Project five",
    },
    {
      id: 20,
      name: "Project five",
    },
    {
      id: 21,
      name: "Project five",
    },
    {
      id: 22,
      name: "Project five",
    },
    {
      id: 23,
      name: "Project five",
    },
    {
      id: 24,
      name: "Project five",
    },
    {
      id: 25,
      name: "Project five",
    },
  ];

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
            <h1>{item.id}</h1>
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
