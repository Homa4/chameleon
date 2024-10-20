import React from "react";
import './Footer.css';

function Footer({ footInfo }) {
    return (
        <div className="footer">
            <div className="address">{footInfo['address']}</div>
            <div className="phone">
                <a href={`tel:${footInfo['phone']}`}>
                    {footInfo['phone']}
                </a>
            </div>
        </div>
    );
}

export default Footer;
