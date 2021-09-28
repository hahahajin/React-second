import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import "./Detail1.css"; 
function Detail2() {
    return (
        <>
            <Header />
            <div className = "body">
                <img className="photo" src="img/학교.jpg" ></img>
                <img className="photo" src="img/기숙사.jpg" ></img>
                <img className="photo" src="img/눈.jpg" ></img>
                <img className="photo" src="img/고양이.jpg" ></img>
                <img className="photo" src="img/멍멍이.jpg" ></img>
                <img className="photo" src="img/날씨.jpg" ></img>
            </div>
        </>
    );
}

export default Detail2;