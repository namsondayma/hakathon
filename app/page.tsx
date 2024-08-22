// pages/index.tsx
import { useEffect, useState } from "react";
import products, { Product } from '../app/products/products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.productName}</h2>
            <p>Giá: {product.price} VND</p>
            <img src={product.image} alt={product.productName} width={100} />
            <p>Số lượng: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}