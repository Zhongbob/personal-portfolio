import React, { useEffect, useRef, useState } from "react";
import AboutMeContainer1 from "./AboutMeContainer1"
import AboutMeContainer2 from "./AboutMeContainer2"
import AboutMeContainer3 from "./AboutMeContainer3"
// import "../css/AboutMeSection.css";
import 'intersection-observer';

export default function AboutMeDescSection(){
    const [toDisplay, setToDisplay] = useState(false)
    
    return(
        
        <section className = "about-me-section">
            <AboutMeContainer1/>
            <AboutMeContainer2/>
            <AboutMeContainer3/>
        </section>
    )
}