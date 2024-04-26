import { useSelector } from "react-redux";
import { isUserLogin } from "../../../redux/auth/auth-selectors";


import User from "../../images/avatar/User.png";
import Icon from "../../images/avatar/Icon.png";
import clipboardText from "../../images/avatar/clipboardText.png";
import userProfile from "../../images/avatar/userProfile.png";
import creditCard from "../../images/avatar/creditCard.png";
import CircleWavy from "../../images/avatar/CircleWavy.png";

import { CategoryItem, Image, TitleNavLink } from "./NavbarMenuItems.styled";


const items = [
    {
        avatar: User,
        text: "Menedżer",
    link: "/menedżer",
        "private": true
    },
    {
        avatar: Icon,
        text: "Użytkownicy",
      link: "/użytkownicy",
        "private": true
    },
    {
        avatar: clipboardText,
        text: "Oferuje",
      link: "/oferuje",
        "private": true
    },
    {
        avatar: userProfile,
        text: "Profil",
      link: "/profil",
        "private": true
    },
    {
        avatar: creditCard,
        text: "Balansować",
      link: "/balansować",
        "private": true
    },
    {
        avatar: CircleWavy,
        text: "Pomoc techniczna",
      link: "/pomoc techniczna",
        "private": true
    }
]


const NavbarMenuItems = () => {
   
  const isLogin = useSelector(isUserLogin);
   const menuItems = !isLogin ? items.filter(item => !item.private) : items;


  const elements = menuItems.map((item, index) => {
    return (
<CategoryItem
            key={index}
          >
            <Image
              src={item.avatar}/>
                <TitleNavLink
                    to={item.link}>{item.text}</TitleNavLink >
          </CategoryItem>
    )
  })

    return (
    <>
      <ul>
        {elements}
      </ul>
    </>
  );
}

export default NavbarMenuItems;


//const NavbarMenuItems = () => {
   
    
//     return (
//     <>
//         <ul>
//           <CategoryItem>
            
//             <TitleNavLink to="/menedżer">
//               <Image src={User} alt=""/>
//               Menedżer</TitleNavLink>
//           </CategoryItem>
//           <CategoryItem>
//             <TitleNavLink to="/użytkownicy">
//               <Image src={Icon} alt="" />
//               Użytkownicy</TitleNavLink></CategoryItem>
//           <CategoryItem>
//             <TitleNavLink to="/oferuje">
//               <Image src={clipboardText} alt="" />
//               Oferuje</TitleNavLink></CategoryItem>
//           <CategoryItem>
//             <TitleNavLink to="/profil">
//               <Image src={userProfile} alt="" />Profil</TitleNavLink></CategoryItem>
//           <CategoryItem>
//             <TitleNavLink to="/balansować">
//               <Image src={creditCard} alt="" />
//               Balansować</TitleNavLink></CategoryItem>
//           <CategoryItem>
//             <TitleNavLink to="/pomoc techniczna">
//               <Image src={CircleWavy} alt="" />
//               Pomoc techniczna</TitleNavLink></CategoryItem>
//      </ul>
//     </>
//   );
// }

// export default NavbarMenuItems;