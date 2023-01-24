import React, { useState } from "react";
// import style from "./style.module.css";
// import styleOption from "./styleOption.module.css"
const QuantitySelector = ({ onChange, prod }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <select
      className="w-24 hidden sm:block h-auto text-gray-500 px-3 py-1 rounded-md border selopt"
      value={quantity}
      onChange={(e) => {
        setQuantity(e.target.value);
        onChange(e.target.value, prod);
      }}
    >
      <option value={1}>
        1
      </option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      <option value={10}>10+</option>
    </select>
  );
};

export default QuantitySelector;
