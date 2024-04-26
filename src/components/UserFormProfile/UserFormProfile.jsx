import React from "react";
import useForm from "../../shared/hooks/useForm";
import TextField from "../TextField/TextField";
import initialState from "./initialState";
import fields from "./fields";
import { WrapForm, Form, Btn } from "./UserFormProfile.styled";


const UserFormProfile = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
     const { id, name, address, contact, email, password } = state;
  return (
    <WrapForm>
          <Form onSubmit={handleSubmit}>
              <TextField value={id} onChange={handleChange} {...fields.admin} />
              <TextField value={name} onChange={handleChange} {...fields.name} />
              <TextField value={address} onChange={handleChange} {...fields.address} />
              <TextField value={contact} onChange={handleChange} {...fields.contact} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
              <Btn type="submit">Edit</Btn>
      </Form>
    </WrapForm>
  );
};

export default UserFormProfile;
