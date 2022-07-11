import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const CategoryCard = (props) => {
  const { data, slugs } = props;

  return (
    <NavLink className="CategoryCard" to={`/products?category=${slugs}`}>
      <div className="container">
        <p> {data.name} </p>
      </div>
    </NavLink>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.object,
  slugs: PropTypes.array,
};

export default CategoryCard;
