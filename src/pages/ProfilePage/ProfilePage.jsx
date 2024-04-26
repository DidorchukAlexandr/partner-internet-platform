
import Navbar from "../../components/Navbar/Navbar";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import Profile from "../../components/Profile/Profile";


const ProfilePage = () => {
    return (
       
            <>   
            <Navbar>
        
             <Profile />
             <PaymentMethod />     
                    
            </Navbar>   
        </>
      
    )
}

export default ProfilePage;