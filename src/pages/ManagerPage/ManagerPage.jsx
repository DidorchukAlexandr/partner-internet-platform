import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserProfile from "../../components/userProfile/UserProfile";
// import { Wrap } from "../../components/Navbar/NavbarMenuItems/NavbarMenuItems.styled";
import Container from "../../components/Container/Container";


const ManagerPage = () => {
    return (
        <Container> 
                <Navbar>
                      <UserProfile />
            </Navbar>
        </Container>
       
    )
}

export default ManagerPage;