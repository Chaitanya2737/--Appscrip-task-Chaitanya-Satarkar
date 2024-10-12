"use client";
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const SideNav = () => {
    const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

    const data = [
        {
            title: "IDEAL FOR",
            subtitle: ["All", "Unselect All", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "occasion",
            subtitle: ["All", "Unselect All", "Rainy Season (1)", "Casual (3)"],
        },
        {
            title: "work",
            subtitle: ["All", "Unselect All", "Wedding (1)", "French Knot (2)", "Party (10)"],
        },
        {
            title: "fabric",
            subtitle: ["All", "Unselect All", "Regular (2)", "Fancy (1)", "Muslin (1)", "Embroidery (1)", "Satin Blend (1)"],
        },
        {
            title: "segment",
            subtitle: ["All", "Unselect All", "Linen (5)", "Contemporary (11)", "Formal Wear (1)", "Raw Silk (2)", "Western Wear (1)", "Cotton (13)"],
        },
        {
            title: "suitable for",
            subtitle: ["All", "Unselect All", "Silver (4)", "Tericoat (1)", "Ethnic (2)"],
        },
        {
            title: "raw materials",
            subtitle: ["All", "Unselect All", "Velvet (5)", "Cotton (7)", "Leather (13)"],
        },
        {
            title: "Pattern",
            subtitle: ["All", "Unselect All", "Casual Wear (7)", "Wool (2)", "Silk (2)", "Cotton Silk (3)", "Leather (2)", "Windowpane (2)", "Cotton (5)", "Pinstripes (1)", "Cellulosic Fibers (4)", "Solid (2)", "Chalk Stripes (2)", "Slim Fit (1)", "Tartan (1)"],
        },
        {
            title: "jacket material",
            subtitle: ["All", "Unselect All", "Velvet (5)", "Cotton (7)", "Leather (13)"],
        },
        {
            title: "sleeve length",
            subtitle: ["All", "Unselect All", "Half Sleeve (2)", "Cap Sleeve (10)"],
        },
        {
            title: "sleeve",
            subtitle: ["All", "Unselect All", "Roll-Up Sleeve (1)", "Regular Sleeves (1)", "Long Sleeve (1)", "Full Sleeve (5)"],
        },
    ];

    const toggleCategory = (title: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [title]: !prev[title], 
        }));
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            {data.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{display:"flex" , justifyContent:"space-between"}}>

                    <h1 
                        onClick={() => toggleCategory(item.title)} 
                        style={{ 
                            fontSize: "22px",
                            fontWeight: 200,
                            marginBottom: '10px', 
                            color: '#252020', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center' 
                        }}
                    >
                        {item.title}
                       
                    </h1>

                    <div>
                            {expandedCategories[item.title] ? <IoIosArrowDown /> : <IoIosArrowForward />} 
                    </div>
                    

                    </div>
                    {expandedCategories[item.title] && (
                        <div style={{ paddingLeft: '20px' }}>
                            {item.subtitle.map((subItem, subIndex) => (
                                <div key={subIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <input type="checkbox" id={`checkbox-${index}-${subIndex}`} disabled />
                                    <label htmlFor={`checkbox-${index}-${subIndex}`} style={{ marginLeft: '10px' }}>
                                        {subItem}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SideNav;
