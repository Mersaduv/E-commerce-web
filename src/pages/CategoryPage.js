import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// THIS IS TEST COMPONENT 
const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/product?category=${categorySlug}`
      );
      setProducts(response.data);
      console.log(response);
    };
    fetchProducts();
  }, [categorySlug]);
  console.log(categorySlug);
  return (
    <div>
      <h2>{categorySlug} Products</h2>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
