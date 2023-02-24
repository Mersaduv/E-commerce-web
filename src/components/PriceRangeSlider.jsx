import React, { useState } from "react";

const PriceRangeSidebar = () => {
  const [rangeValue, setRangeValue] = useState([0, 100]);

  const handleMinChange = (event) => {
    setRangeValue([parseInt(event.target.value), rangeValue[1]]);
  };

  const handleMaxChange = (event) => {
    setRangeValue([rangeValue[0], parseInt(event.target.value)]);
  };

  const min = rangeValue[0];
  const max = rangeValue[1];

  return (
    <div className="price-range-sidebar px-3">
   
      <div className="range-slider">
        <label className="text-base font-semibold" htmlFor="minPrice">حداقل قیمت :</label>
        <input
          type="range"
          id="minPrice"
          name="minPrice"
          min="0"
          max={max}
          value={min}
          onChange={handleMinChange}
        />
        <output htmlFor="minPrice">{min} تومان</output>

        <label className="text-base font-semibold" htmlFor="maxPrice">حداکثر قیمت :</label>
        <input
          type="range"
          id="maxPrice"
          name="maxPrice"
          min={min}
          max="100"
          value={max}
          onChange={handleMaxChange}
        />
        <output htmlFor="maxPrice">{max} تومان</output>
      </div>
    </div>
  );
};

export default PriceRangeSidebar;
