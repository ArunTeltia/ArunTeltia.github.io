import React,{useState,useEffect} from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Maintainers from "./maintainers/Maintainers";

function App() {
  const [val, setval] = useState("/");
  useEffect(() => {
      const url = window.location.pathname;
      const res = url.substring(1);
      setval(res);
      console.log(res);
  }, [])
  return (
    

        <ThemeProvider theme={chosenTheme}>
          <>
            <GlobalStyles />
            <div>
              <Main theme={chosenTheme} />
            </div>
          </>
        </ThemeProvider>
       
  );
}

export default App;
