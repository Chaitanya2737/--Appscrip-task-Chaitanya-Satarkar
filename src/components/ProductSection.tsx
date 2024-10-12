"use client"; 
import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import Card from './Card'; 
import style from './components.module.css';
import Hidesidenv from './Hidesidenv';
import MaxWithWrapper from './MaxWithWrapper';

const ProductSection = () => {
  // Interfaces for data structure
  interface Rating {
    rate: number;
    count: number;
  }

  interface Data {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating; // Nested object
  }

  // State to hold product data
  const [products, setProducts] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHide, setIsHide] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from the API
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: Data[] = await res.json();
      setProducts(data); 
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); 
  }, []);

  return (
    <>
      <MaxWithWrapper>
        <div style={{ width: "100%", margin: "30px 0", padding: "20px 0", borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5" }}>
          <Hidesidenv hide={setIsHide} />
        </div>
      </MaxWithWrapper>
      <div style={{ padding: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          {isHide && (
            <div style={{ width: '30%' }} className={style.sideNav}>
              <SideNav />
            </div>
          )}
          <div style={{ marginLeft: "30px", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', width: '75%' }}>
            {isLoading && <p style={{ color: 'blue', fontSize: '1.2rem' }}>Loading products...</p>} 
            {error && <p style={{ color: 'red', fontSize: '1.2rem' }}>Error: {error}</p>} 
            <Card products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
