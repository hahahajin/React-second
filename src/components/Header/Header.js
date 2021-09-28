import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
    <>
          <div className="header">
          
              <h1><Link to="/" style={{ textDecoration: 'none' }}>&lt;</Link>  😎🤓😊😁😀</h1>
          </div>

    </>
    );
}

export default Header;