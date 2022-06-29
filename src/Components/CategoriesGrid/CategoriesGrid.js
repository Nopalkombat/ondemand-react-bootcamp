/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import CategoryCard from '../CategoryCard';
import { useProductCategories } from '../../utils/hooks/useProductCategories';
import './styles.scss';
import { Link } from 'react-router-dom';

const CategoriesGrid = () => {
  const { data, isLoading } = useProductCategories();

  if (!data || isLoading) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  return (
    <>
      <h1>Featured Categories</h1>
      <div className="CategoriesGrid">
        {data.results.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </>
  );
};

export default CategoriesGrid;
