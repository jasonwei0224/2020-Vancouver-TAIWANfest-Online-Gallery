import React from 'react';
import "../../homeComponents/homeCss/homeMain.css";
import "./homeMain-ch.css"
function HomeColoredHeader2(props) {
    return (
        <div id="home_colored_header">
            <div id="home_colored_header_title2_ch">
                {props.title}
            </div>
            <div id="home_colored_header_line">
            </div>
        </div>

    )
}

export default HomeColoredHeader2;
