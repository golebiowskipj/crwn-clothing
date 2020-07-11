import React from "react";

const MenuItem = ({ title, img }) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <span classNAme="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
