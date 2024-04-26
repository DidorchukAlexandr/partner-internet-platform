import React from "react";
import { Wrap, Span, WrapCard } from "./PaymentMethod.styled";
import Mastercard from "../images/Mastercard.png";


const PaymentMethod = () => {
    return (
        <div style={{
             background: "rgb(242, 242, 242)", 
             height: "330px",
        }}>
            <Wrap>
                <Span>Payment Method</Span>
            </Wrap>
            <WrapCard>
                <img src={Mastercard}
                alt="Mastercard"
                width="218"
                height="218"/>
            </WrapCard>
        </div>
    )
}

export default PaymentMethod;