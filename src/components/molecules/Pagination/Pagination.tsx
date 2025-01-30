import React from 'react';
import { Button } from "@components/atoms/Button/Button";
import "./Pagination.css"
import { PaginationProps } from './Pagination.props';

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      <Button
        width="120px"
        height="40px"
        theme="neutral"
        label="Précédent"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      
      <span>Page {currentPage}</span>
      
      <Button
        width="120px"
        height="40px"
        theme="neutral"
        label="Suivant"
        disabled={totalPages === currentPage}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
