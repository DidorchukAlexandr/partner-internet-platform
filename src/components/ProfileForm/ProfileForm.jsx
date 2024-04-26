import TextField from "../TextField/TextField";
import { WrapForm } from "../UserFormProfile/UserFormProfile.styled";
import { Form } from "../UserFormProfile/UserFormProfile.styled";
import useForm from "../../shared/hooks/useForm";
import fields from "../UserFormProfile/fields";
import initialState from "../UserFormProfile/initialState";
import { Btn } from "../UserFormProfile/UserFormProfile.styled";
import { Button } from "./ProfileForm.styleld";


const ProfileForm = ({ onSubmit }) => {
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
             
              <Button>Ustawienia profilu</Button>
      </Form>
    </WrapForm>
  );
};

export default ProfileForm;
