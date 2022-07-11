/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

const Pagination = (props) => {
  const { total_pages, currentPage } = props;
  let { q } = useParams();

  let newPage = currentPage;
  function addPagination() {
    if (newPage == total_pages) return;
    newPage++;
  }

  function substractPagination() {
    if (currentPage == 1) return 1;
    newPage--;
  }

  return (
    <div className="pagination button-container full center">
      <button className="simple-button" onClick={() => substractPagination()}>
        Previous
      </button>
      <button className="simple-button" onClick={() => addPagination()}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
