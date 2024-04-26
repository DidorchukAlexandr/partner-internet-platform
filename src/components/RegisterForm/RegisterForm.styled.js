import styled from "styled-components";

export const WrapForm = styled.div``;

export const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-family: DM Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.56;
  margin-left: 120px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  width: 300px;
`;

export const Btn = styled.button`
  color: rgb(255, 255, 255);
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.7;
  width: 218px;
  height: 54px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    rgb(108, 165, 252),
    rgb(45, 107, 199) 52.5%,
    rgb(1, 73, 180) 100%
  );
  cursor: pointer;
  margin-top: 30px;
  margin-left: 15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  width: 100%;
  /* max-width: 450px; */
  padding: 10px;
`;

export const Label = styled.label`
  color: rgb(0, 0, 0);
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  margin-left: 15px;
`;

export const Input = styled.input`
  color: rgb(0, 0, 0);
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  box-sizing: border-box;
  border: 1px solid rgb(224, 226, 231);
  border-radius: 16px;
  width: 410px;
  height: 50px;

  padding: 5px 15px;
  /* border: none; */
  outline: none;
`;
