/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
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

export default CategoryCard;
