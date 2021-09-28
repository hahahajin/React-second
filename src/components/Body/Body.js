import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

function Body() {
    return (
    <>
          <div className="body">
              <ul className="list">
                <li className="link"><Link to="/detail1" style={{ textDecoration: 'none'  }}>Introduce</Link></li>
                <li className="links"><Link to="/detail2" style={{ textDecoration: 'none' }}>Photo</Link></li>
                <li className="links"><Link to="/detail3" style={{ textDecoration: 'none' }}>Etc</Link></li>
              </ul>
          </div>

    </>
    );
}

export default Body;