import React, { useState } from 'react';

const CategoryFilter = ({ onChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <select className="w-20 sm:24 hidden sm:block h-auto text-gray-500 px-1 py-1 rounded-md border" value={selectedCategory} onChange={(e) => {
      setSelectedCategory(e.target.value);
      onChange(e.target.value);
    }}>
      <option className='px-2 text-sm' value="">All</option>
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        
        </option>
        
      ))}
    </select>
  );
};

export default CategoryFilter;