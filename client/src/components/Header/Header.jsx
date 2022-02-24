import React from "react";
import "./Header.scss";
// import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header 
    style={{ marginTop: "2%" }}
    >
      {/* <Navbar /> */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562059390-a761a084768e')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className=" display-1 ">ZeeFood</h1>
              {/* <h4 className="mb-3">Subheading</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
