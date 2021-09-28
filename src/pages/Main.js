import React, { useState } from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import { Link } from "react-router-dom";

function Main() {
    // const [data, setData] = useState("jaehyeon's");
    return (
        <>
            <div className="main">
                <Header />
                <Body />
            </div>
           
        </>
    );
}

export default Main;

