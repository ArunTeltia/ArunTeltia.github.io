import React from "react";
import "./LoaderLogo.css";
import Loader from "../../assests/images/ArunTeltia.gif";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return <img src={Loader} alt="Loader" />;
  }
}

export default LogoLoader;
