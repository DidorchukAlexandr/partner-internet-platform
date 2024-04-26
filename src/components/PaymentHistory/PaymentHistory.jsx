import { Wrap, Span, Text, Item, List } from "./PaymentHistory.styled";
const historyItem = ["NO.", "Data faktury", "Termin zapłaty", "Status", "Metoda płatności", "Kwota"]


const PaymentHistory = () => {
    return (
        <Wrap>
            <div style={{
                 marginBottom: "28px",
            }}>
                <Span>Historia płatności</Span>
            </div>
            <Item>
                {
                    historyItem.map((item, index) => (
                        <List key={index}>
                            <Text>{item}</Text>
                        </List>
                    ))
                }
            </Item>
        </Wrap>
    )
}

export default PaymentHistory;