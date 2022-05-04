import "./App.css";
import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/pages/home/header";
import { ErrorPage } from "./components/pages/error/error";
import { Saved } from "./components/pages/saved/save";
import { Weather } from "./components/pages/weather/weather";
import { GlobalStyle } from "./components/globalStyles";
import { ReactComponent as Icon } from "./img/MainLogoKM.svg";
import styled from "styled-components";
import { Buttton } from "./components/button.style";



//two different ways to do it but the second way is better
// const linkStyle ={
//   margin:"1rem",
//   textDecoration: "none",
//   color:'white',
// };
// const StyledLink = styled(Link)`
// color:white;
// text-decoration: none;
// margin:1rem;
// position: relative;
// `

const NavUnlisted = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0;
  text-decoration: none;
  border: 2px red solid;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(75, 9, 121, 1) 40%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 100vw;
  height: 10vh;
  padding: 0;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }
 
`;

const links = [
  { name: "Home", path: "/" },
  { name: "Weather", path: "/weather" },
  { name: "Saved", path: "./saved" },
];



function App() {
  return (
    <Fragment>
    <Router>
    <GlobalStyle/>
    <NavUnlisted>
    <Icon className='Icon'/>
    {links.map((link, index) => (
      <NavLink key={index} to={link.path}>
      <li>{link.name}</li>
      </NavLink>
      ))}

      
      </NavUnlisted>
      <Buttton>Click Me</Buttton>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Router>
      </Fragment>
  );
}

export default App;
