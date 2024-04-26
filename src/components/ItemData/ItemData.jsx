import { Item, List, Span, Image } from "./ItemData.styled";
import arrowDown from "../images/arrowDown.png";
const itemTitles = ["UID", "Nazwa", "Marka", "Płacić", "Balansować", "Status"]
 
const ItemData = () => {
    return (
        <Item>
                    {
                        itemTitles.map((item, index) => (
                        <List key={index}>
                                <Span>{item}</Span>
                                <Image src={arrowDown}
                            alt="arrowDown"
                            width="24"
                            height="24"/>
                        </List>
                        ))
                    }
                </Item>
    )
}

export default ItemData;