import React, { useEffect, useState } from "react";
import styled, {createGlobalStyle} from "styled-components";
import { Home, Compass, Settings } from "react-feather";
import { Link } from "react-router-dom";


function NavBar() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <Styles.Wrapper>
      <CSSReset />

    {isMobile ? (
      <MobileNavbar.Wrapper>
        <MobileNavbar.Items>
          <MobileNavbar.Item>
            <MobileNavbar.Icon>  
              <Home size={16} />
            </MobileNavbar.Icon>
            <Link to="/">Home</Link>
          </MobileNavbar.Item>
          <MobileNavbar.Item>
            <MobileNavbar.Icon>  
              <Compass size={16} />
            </MobileNavbar.Icon>
              <Link to="/mytrips">My Trips</Link>
            </MobileNavbar.Item>
          <MobileNavbar.Item>
            <MobileNavbar.Icon>  
              <Settings size={16} />
            </MobileNavbar.Icon>
              <Link to="/settings">Settings</Link>
            </MobileNavbar.Item>
        </MobileNavbar.Items>
      </MobileNavbar.Wrapper>
    ) : (
      <Navbar.Wrapper>
        <Navbar.Logo>Logo</Navbar.Logo>
        <Navbar.Items>
          <Navbar.Item>
            <Link to="/">Home</Link>
            </Navbar.Item>
          <Navbar.Item>
            <Link to="/mytrips">My Trips</Link>
          </Navbar.Item>
          <Navbar.Item>            
            <Link to="/settings">Settings</Link>
          </Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>
    )}
    </Styles.Wrapper>
  );
}


const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    `,
  Logo: styled.h1`
    border: 1px solid grey;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `,
};

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    // height: 100vh;
  `,
};


const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    align-self: flex-end;
    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 0.5rem;
    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem
  `,
  Icon: styled.span``,
};

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default NavBar;
