import React from "react";
import { ProfileWrap, Text, Background, Image } from "./UserProfile.styled";
import Avatar from "../images/Avatar.png";
import UserFormProfile from "../UserFormProfile/UserFormProfile";

const UserProfile = () => {
    return (
       
        <ProfileWrap>
            <Background>
                <Text>Your Profile</Text>
                <Image srcSet={Avatar} />
            </Background>
            <UserFormProfile />
       </ProfileWrap>
       
    )
}

export default UserProfile;