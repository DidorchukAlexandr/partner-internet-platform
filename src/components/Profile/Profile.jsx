import React from "react";
import { ProfileWrap, Background, Text, Image } from "../userProfile/UserProfile.styled";
import Avatar from "../images/Avatar.png";
import ProfileForm from "../ProfileForm/ProfileForm";



const Profile = () => {
    return (
       
        <ProfileWrap style={{
        marginBottom: "28px",
       }}>
            <Background>
                <Text>Your Profile</Text>
                <Image srcSet={Avatar} />
            </Background>
            <ProfileForm />
        </ProfileWrap >
       
    )
}

export default Profile;