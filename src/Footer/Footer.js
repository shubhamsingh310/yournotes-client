import React from "react";

import "./Footer.css";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer>
            <p>CopyRightⒸ  {year}</p>
        </footer>
    )
}

export default Footer;