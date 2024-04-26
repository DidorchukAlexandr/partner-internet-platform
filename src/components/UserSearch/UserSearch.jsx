import React from "react";
import { Form, Input, Btn } from "./UserSearch.styled";
import Search from "../images/Search.png";

const UserSearch = () => {
    return (
        <Form>
            <img src={Search}
                style={{
                position: 'absolute',
                left: '18px',
                top: '14px',
            }}
           alt="Search"
                width="16"
                height="16"/>
            <Input type='text'
                placeholder='Szukaj' />
             <Btn type="submit">Dodaj ofertę</Btn>
        </Form>
    )
}

export default UserSearch;