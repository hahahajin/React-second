import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import "./Detail1.css"; 
function Detail1() {
    return (
        <>
            <Header />
            <div className="body"> 
            <img className="photo1" src="img/hajin.png" ></img>
                <p>이름: 양하진</p>
                <p>전공: 파이버융합소재공학</p>
            </div>
        </>
    );
}

export default Detail1;

