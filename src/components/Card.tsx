import React from 'react';
import Image from 'next/image';

// Define the interfaces for Rating and Data
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

// Define props for the Card component
interface CardProps {
  products: Data[];
}

const Card: React.FC<CardProps> = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <div 
          key={item.id} 
          style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            width: '250px', 
            padding: '15px', 
            textAlign: 'center', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out',
            height: '25rem',
            cursor: 'pointer', // Added to indicate it's clickable
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)'; // Scale on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale on leave
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={200}
            height={200}
            layout="fixed"
            style={{ borderRadius: '4px' }} // Optional: adds slight rounding to image
          />
          <h1 style={{ fontSize: '17px', color: '#333', margin: '10px 0', fontWeight: 'bold' }}>
            {item.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
            Price: ${item.price.toFixed(2)} {/* Ensure price is formatted */}
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
