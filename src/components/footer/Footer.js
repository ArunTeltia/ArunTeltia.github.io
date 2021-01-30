import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */
// useEffect(()=>{
//   selectFile();
// },[]);

// const selectFile = () => {
  
//   if (selectedTheme === 'DARK_MODE'){
  
//   import { greeting } from "../../portfolio.js";
    
//   } else if (selectedTheme === 'LIGHT_MODE'){
//     import 'dark.css';
//   }
// }
export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by Arun Teltia
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
