import React from 'react';

const CategoryItem = ({ category, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(category.id);
  };

  return (
    <li
      className={isSelected ? 'selected' : ''}
      onClick={handleClick}
    >
      {category.name}
    </li>
  );
};

export default CategoryItem;
