import useForm from "../../shared/hooks/useForm";

import initialState from "./initialState";
import fields from "./fields";
import { WrapForm, Title, Form, Btn, FormGroup, Label, Input } from "./RegisterForm.styled";

const TextField = ({ label, ...props }) => {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input {...props}/>
        </FormGroup>
    )
}



const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
     const { name, email, password, keep_me_logged_in } = state;
  return (
      <WrapForm>
          <div style={{
              width: "410px",
              marginLeft: "10px",
              marginBottom: "10px",
              borderBottom: "1px solid rgb(224, 229, 242)",
          }}>
              <Title>Rejestracja</Title>
              </div>
          <Form onSubmit={handleSubmit}>
              <div style={{
                  display: "flex",
              }}>
                  <TextField
                      style={{
                  width: "195px",
                      }}
                      value={name}
                      onChange={handleChange}
                      {...fields.name} />
                  <TextField
                      style={{
                  width: "195px",
                      }}
                      value={email}
                      onChange={handleChange}
                      {...fields.email} />
               </div>
                  <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
              />
                {/* <TextField
          value={hasło}
          onChange={handleChange}
          {...fields.hasło}
              /> */}
              <div style={{
                 width: "400px",
                  color: "rgb(46, 101, 243)",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "1.43", 
                  marginLeft: "290px",
              }}> <span >Forget password?</span>
                  </div>
              <div style={{
                   marginTop:"30px",
               }}>
               
                  <input style={{
                    width: "18px",
                      height: "18px",
                      
                      marginLeft: "20px",
                }} checked={keep_me_logged_in} name="keep_me_logged_in" onChange={handleChange} type="checkbox" />
                  <label style={{
                      color: "rgb(0, 0, 0)",
                      fontFamily:" DM Sans",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "1.43",
                      marginLeft: "10px",
                  }}>Keep me logged in</label>
              </div>
              <Btn type="submit">Register</Btn>
      </Form>
    </WrapForm>
  );
};

export default RegisterForm;