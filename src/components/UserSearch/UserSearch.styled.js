import styled from "styled-components";

export const Form = styled.div`
  position: relative;
  margin-left: auto;
`;

export const Input = styled.input`
  outline: none;
  border: none;

  background-color: fffff;
  padding: 12px 20px;
  padding-left: 45px;
  height: 44px;
  width: 168px;
  border-radius: 10px;

  font-family: Public Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  &:hover,
  &:focus {
    transition: all 0.2s linear, opacity 0.2s ease-in-out;
  }
`;
export const Btn = styled.button`
  color: rgb(255, 255, 255);
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
  width: 148px;
  height: 44px;
  border: none;
  border-radius: 10px;
  margin-left: 15px;
  background: linear-gradient(
    90deg,
    rgb(108, 165, 252),
    rgb(45, 107, 199) 52.5%,
    rgb(1, 73, 180) 100%
  );
  cursor: pointer;
`;
