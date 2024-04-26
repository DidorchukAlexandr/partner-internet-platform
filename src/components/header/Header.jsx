
import { Item, List,  ContentWrapper } from "./Header.styled";



const Header = () => {
    return (
         <ContentWrapper>
            <List>
                <Item style={{
                borderBottom: "4px solid rgb(255, 0, 0)",
                }}>Indeks</Item>
                <Item style={{
                borderBottom: "4px solid rgb(255, 214, 0)",
                }}>Płatności</Item>
                <Item style={{
                borderBottom: "4px solid rgb(15, 182, 0)",
                }}>Budżet</Item>
            </List>
         </ContentWrapper>
    )
}

export default Header;