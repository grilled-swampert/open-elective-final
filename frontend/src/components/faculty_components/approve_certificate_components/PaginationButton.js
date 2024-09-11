import React from "react";
import './PaginationButton.css';

export default function PaginationButton({ totalPages, currentPage, onPageChange, maxPagesVisible = 10 }) {
  const pageNumbers = (total, max, current) => {
    const half = Math.floor(max / 2);
    let to = max;

    if (current + half >= total) {
      to = total;
    } else if (current > half) {
      to = current + half;
    }

    let from = Math.max(to - max, 0);

    return Array.from({ length: Math.min(total, max) }, (_, i) => (i + 1) + from);
  };

  const pages = pageNumbers(totalPages, maxPagesVisible, currentPage);

  return (
    <div className="pagination-buttons">
      <button className="page-btn start-page" disabled={currentPage === 1} onClick={() => onPageChange(1)}>start</button>
      <button className="page-btn prev-page" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>prev</button>
      {pages.map(page => (
        <button key={page} className={`page-btn ${page === currentPage ? 'active' : ''}`} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button className="page-btn next-page" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>next</button>
      <button className="page-btn end-page" disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>end</button>
    </div>
  );
}