import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Pagination.propTypes = {
  total_pages: PropTypes.Number,
  currentPage: PropTypes.Number,
};

export default Pagination;
