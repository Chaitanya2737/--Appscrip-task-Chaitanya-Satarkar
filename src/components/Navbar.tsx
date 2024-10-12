"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 
import { FaHome, FaUserAlt, FaBell, FaUser } from "react-icons/fa"; 
import ListNavSection from "./ListNavSection";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [istrue, setIstrue] = useState<boolean>(false);


    // Check if the screen width is less than 768px
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  

      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



  return (
    <>
      {/* Top Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "white",
          color: "black",
          width: "100%",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >

        {/* for mobile device */}
        <GiHamburgerMenu style={!isMobile ? {display:"none"}: {display:"flex"} }  />
        {/* Left Side: Logo */}
           
            <div style={{ display: "flex", alignItems: "center" , cursor:"pointer"}}>
          <Image src="/logo.png" alt="Company Logo" width={35} height={35} />
        </div>

        {/* Middle: Company Name */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "black",
            margin: "0",
            cursor:"pointer"
          }}
        >
          <h1 >Logo</h1>
        </div>

        {/* Right Side: Icons */}
        <div style={{ display: "flex", gap: "20px" }}>
          <FiSearch
            style={{ fontSize: "1.5rem", color: "black", cursor: "pointer" }}
          />
          <IoHeartOutline

            style={{ fontSize: "1.5rem", color: "black", cursor: "pointer" }}
          />
          <FaUser
            style={{ fontSize: "1.5rem", color: "black", cursor: "pointer" }}
          />
        </div>
      </nav>

      {/* Navigation List Section */}
      {
        !isMobile  &&    <nav
        style={{
          backgroundColor: "white",
          padding: "10px 30px",
          width: "100%",
        }}
      >
        <ListNavSection />
      </nav>
      }
   
    </>
  );
};

export default Navbar;
