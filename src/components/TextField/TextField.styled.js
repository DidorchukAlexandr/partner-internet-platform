import styled from "styled-components";

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  color: rgb(108, 117, 125);
  font-family: DM Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Input = styled.input`
  color: rgb(43, 54, 116);
  font-family: DM Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  /* padding: 5px; */
  border: none;
  outline: none;
`;
