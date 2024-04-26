import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserSearch from "../../components/UserSearch/UserSearch";
import { Text } from "./UsersPage.styled";
import ItemData from "../../components/ItemData/ItemData";



const UserPage = () => {
    return (
         <>   
            <Navbar>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                     marginBottom: "20px"
                }}>
                    <Text>Użytkownicy</Text>
                <UserSearch />
                </div>
                <ItemData />
            </Navbar>   
        </>
    )
}

export default UserPage;