import React from "react";
import Icon1 from "../images/icons/Icon1.png";
import Icon2 from "../images/icons/Icon2.png";
import Icon3 from "../images/icons/Icon3.png";
import Icon4 from "../images/icons/Icon4.png";
import Icon5 from "../images/icons/Icon5.png";
import Icon6 from "../images/icons/Icon6.png";
import { Item, List, Image, Title, Text } from "./SupportItems.styled";

const supportItem = [
    {
        image: Icon1,
        name: "Czy mogę dodać lub edytować więcej niż jednego użytkownika jednocześnie?",
        text: "Ut sed orci venenatis, aliquam nunc et, tempor leo. Suspendisse dolor Massa, pellentesque vitae tempus non, tempor a Massa. Suspendisse hendrerit Massa velit, et blandit ex pulvinar in.",

    },
    {
        image: Icon2,
        name: "Jak edytować istniejącego użytkownika?",
        text: "Nam nec ante et elit pulvinar placerat. Praesent lacinia purus in dui convallis placerat. Cras euismod a nisi ut elementum. Duis auctor eros ex, at pharetra arcu rhoncus id. Curabitur in enim justo. Nullam eget aliquet mauris. Nulla mattis, sem ut facilisis viverra.",
    },
     {
        image: Icon3,
        name: "Jakie „dane dodatkowe” można wybrać?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis sem eu sem porta cursus. Nam sollicitudin finibus tincidunt. ",
    },
      {
        image: Icon4,
        name: "Jak utworzyć i zdefiniować uprawnienia dla roli?",
        text: "Sed ut vehicula arcu, eget consequat sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tristique et est eu vehicula. ",
    },
       {
        image: Icon5,
        name: "Jakie funkcje administracyjne są teraz dostępne dla RapidLite?",
        text: "Quisque venenatis ligula et nunc aliquam, vitae blandit mi suscipit. Praesent venenatis odio nisl, id ultricies est sollicitudin vel. Ut volutpat tincidunt turpis, sed feugiat dolor euismod sit amet. Quisque non turpis id risus fringilla porttitor. Aenean vulputate lorem vel lobortis volutpat. Phasellus non ex tortor. ",
    },
        {
        image: Icon6,
        name: "Jak korzystać z zakładki Informacje PSAP?",
        text: "Sed metus nunc, ultrices non lacus eget, venenatis cursus neque. Fusce orci dui, bibendum eleifend nisi ut, interdum condimentum diam. Aliquam erat volutpat. Suspendisse libero tellus, dignissim pulvinar ipsum in, sagittis pretium lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis sem eu sem porta cursus.",
    }
]

const SupportItems = () => {
    return (
        <>
        <Item>
            {
                supportItem.map((item, index) => (
                    <List key={index}>
                        <Image src={item.image} />
                        <div>
                             <Title>{item.name}</Title>
                             <Text>{item.text}</Text>
                       </div>
                    </List>
                ))
            }
            </Item>
        </>
    )
}

export default SupportItems;