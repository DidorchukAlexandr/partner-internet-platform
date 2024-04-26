import NavbarMenuItems from "./NavbarMenuItems/NavbarMenuItems";
import { Logo, LogoTitle, NavbarWrapper, Wrap } from "./Navbar.styled";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/auth-selectors";
import React from "react";
import myLogo from "../images/myLogo.png";
import Container from "../Container/Container";

import Header from "../header/Header";
import AuthLink from "../AuthLink/AuthLink";
import UserAuth from "../UserAutth/UserAuth";


const Navbar = ({children}) => {

    const isLogin = useSelector(isUserLogin);


    return (
        
    <Container>
            
             <NavbarWrapper>
                <Logo>
                <img src={myLogo}
                alt="logo"
                width="50"
                height="41"
                loading="lazy"/>
               <LogoTitle>Analytix</LogoTitle>     
            </Logo>
            <NavbarMenuItems />
            </NavbarWrapper>
            <div>
              <div style={{
                display: "flex",
                padding: "20px 35px",
                height: "108px",
                }}>
                    <Header />
                    {!isLogin && <AuthLink />}
                    {isLogin && <UserAuth />}
                </div>
                <Wrap>

                     {children}
                </Wrap>
            

            </div>
                
    </Container> 
            
            
    
    )
}

export default Navbar;