import React from 'react';
import Image from 'next/image';

const Card = ({ products }) => {
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
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={200}
            height={200}
            layout="fixed"
          />
          <h1 style={{ fontSize: '17px', color: '#333', margin: '10px 0', fontWeight: 'bold' }}>{item.title}</h1>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>Price: ${item.price}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
