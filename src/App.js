import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/home/header";
import { ErrorPage } from "./components/pages/error/error";
import { Saved } from "./components/pages/saved/save";
import { Weather } from "./components/pages/weather/weather";
import styled from "styled-components";


const NavUnlisted = styled.ul`
text-decoration:none;
border: 2px red solid;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(75,9,121,1) 40%, rgba(0,212,255,1) 100%);
width:100vw;
height: 10vh;
margin: 0 auto;
padding:0;
display:flex;
align-items: center;
`;

//two different ways to do it but the second way is better
// const linkStyle ={
//   margin:"1rem",
//   textDecoration: "none",
//   color:'white',
// };
const StyledLink = styled(Link)`
color:white;
text-decoration: none;
margin:1rem;
position: relative;
`


function App() {
  return (
    <Router>

      <NavUnlisted>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/weather" >Weather</StyledLink>
        <StyledLink to="/saved" >Saved</StyledLink>
      </NavUnlisted>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
