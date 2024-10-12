"use client";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import MaxWithWrapper from "./MaxWithWrapper";
import Image from "next/image";

const Footer = () => {
  const mettamuse: string[] = [
    "About Us",
    "Stories",
    "Artisans",
    "Boutiques",
    "Contact Us",
    "EU Compliances Docs",
  ];

  const QuickLinks: string[] = [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a", 
        color: "#fff",
        padding: "50px 0"
      }}
    >
      <MaxWithWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {/* Newsletter Subscription Section */}
          <div style={{ maxWidth: "400px", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "1.8rem", marginBottom: "15px", fontWeight: 600 }}>
              Be the first to know
            </h1>
            <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
              Sign up for updates from mettā muse and stay informed about new collections and offers.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                onChange={(e)=>e.target.value}
                style={{
                  backgroundColor: "#fff",
                  width: "70%",
                  height: "40px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  padding: "0 15px",
                  border: "none",
                  fontSize: "1rem",
                  outline: "none",
                  color:"black"
                }}
              />
              <button
                style={{
                  backgroundColor: "#f0c14b",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: "1rem",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact and Currency Information Section */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    fontSize: "1.2rem",
                  }}
                >
                  CONTACT US
                </li>
                <li style={{ marginBottom: "10px" }}>+44 221 133 5360</li>
                <li>customercare@mettamuse.com</li>
              </ul>
            </div>

            <div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    fontSize: "1.2rem",
                  }}
                >
                  CURRENCY
                </li>
                <li>USD</li>
                <li style={{ marginTop: "5px", lineHeight: "1.6" }}>
                  Transactions will be completed in Euros. A currency reference
                  is available on hover.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWithWrapper>

      <MaxWithWrapper>
        <hr style={{ borderColor: "#333", marginBottom: "30px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {/* Mettamuse Links */}
          <div style={{ minWidth: "150px" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginBottom: "15px",
                }}
              >
                METTĀ MUSE
              </li>
              {mettamuse.map((item, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "10px", cursor: "pointer" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div style={{ minWidth: "150px" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginBottom: "15px",
                }}
              >
                QUICK LINKS
              </li>
              {QuickLinks.map((item, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "10px", cursor: "pointer" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media and Payment Section */}
          <div style={{ minWidth: "150px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h1 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
                Follow Us
              </h1>
              <FaInstagram
                style={{
                  marginRight: "15px",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
              <FaLinkedin
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              />
            </div>

            <div>
              <h1 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
                mettā muse Accepts
              </h1>
              <Image
                src="/Frame 136278.png"
                alt="Payment methods"
                width={200}
                height={30}
              />
            </div>
          </div>
        </div>
      </MaxWithWrapper>

      <div style={{textAlign:"center"}}>
        <h4>Copyright © 2023 mettamuse. All rights reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
