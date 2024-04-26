import Navbar from "../../components/Navbar/Navbar";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import PaymentHistory from "../../components/PaymentHistory/PaymentHistory";


const BalancesPage = () => {
    return (
        
            <>   
            <Navbar>
               <PaymentMethod /> 
               <PaymentHistory />      
             </Navbar>
        </>
    )

}

export default BalancesPage;