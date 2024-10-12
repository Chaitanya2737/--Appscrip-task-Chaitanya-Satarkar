"use client";
import React from 'react';
import Link from 'next/link'; // Importing Link from Next.js

const ListNavSection = () => {
    const list: string[] = [
        "Shop",
        "Skills",
        "Stores",
        "About Us",
        "Contact Us"
    ];

    return (
        <div style={{  margin:"20px 0",
            padding:"20px 0" }}>
            <ul style={{
                listStyle: "none", 
                display: "flex", 
                justifyContent:"center",
              
                gap: '20px', 
                padding: 0, 
                margin: 0
            }}>
                {
                    list.map((item, index) => (
                        <li key={index} style={{
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            transition: "color 0.3s ease"
                        }}>
                            <Link href={"#"} style={{ textDecoration: "none", color: "inherit" }}>
                               
                                <span 
                                   onMouseEnter={(e) => e.currentTarget.style.color = "blue"}
                                   onMouseLeave={(e) => e.currentTarget.style.color = "black"}>
                                    {item}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListNavSection;
