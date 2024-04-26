import Navbar from "../../components/Navbar/Navbar";
import UserSearch from "../../components/UserSearch/UserSearch";
import ItemData from "../../components/ItemData/ItemData";
import { Text } from "../../pages/UsersPage/UsersPage.styled";


const OfferPage = () => {
    return (
        <>
            <Navbar>
         
                <div style={{
                    display: "flex",
                    alignItems: "center",
                     marginBottom: "20px"
                }}>
                    <Text>Oferuje</Text>
                <UserSearch />
                </div>
                <ItemData />
                 
            </Navbar>    
        </>
    )
}

export default OfferPage;