import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const QuantitySelector = ({ onChange, prod }) => {
  const [quantity, setQuantity] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [newQuantity, setNewQuantity] = useState(1);
  const product = useSelector((state) => state.cart);

  useEffect(() => {
    if (product.cart) {
      const quantityCart = product.cart.findIndex(
        (item) => item._id === prod._id
      );
      const productItem = { ...product.cart[quantityCart] };
      setQuantity(productItem.quantity);
      if (productItem.quantity === "10") {
        setShowInput(true);
      }
    }
  }, []);

  const handleQuantityChange = (newQuantitySelect) => {
    setQuantity(newQuantitySelect);
    setNewQuantity(newQuantitySelect);
    onChange(newQuantitySelect, prod);
    if (newQuantitySelect === "10") {
      setShowInput(true);
    } else if (newQuantitySelect !== "") {
      setShowInput(false);
    }
  };

  const changedQuantity = () => {
    setQuantity(newQuantity);
    onChange(newQuantity, prod);
    setShowInput(false);

  };
  return (
    <div>
      <select
        className="w-24 hidden sm:block h-auto text-gray-500 px-3 py-1 rounded-md border selopt"
        value={quantity}
        onChange={(e) => handleQuantityChange(e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10+</option>
        <option value={quantity}>{`${quantity}`}</option>
      </select>
      {showInput ? (
        <div>
          <input
            value={newQuantity}
            type="number"
            onChange={(e) => setNewQuantity(e.target.value)}
          />
          <button onClick={ changedQuantity}>انجام شد</button>
        </div>
      ) : null}
    </div>
  );
};
export default QuantitySelector;
