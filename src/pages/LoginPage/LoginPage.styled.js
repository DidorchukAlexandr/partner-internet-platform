import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);

  width: 50%;
  height: 100vh;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  border-bottom-left-radius: 150px;
  background: linear-gradient(
    180deg,
    rgb(112, 169, 255),
    rgb(49, 110, 201) 54%,
    rgb(2, 74, 181) 100%
  );
`;

export const Image = styled.img`
  width: 450px;
  height: 370px;
  margin-bottom: 29px;
`;

export const Title = styled.h1`
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-family: DM Sans;
  font-size: 96px;
  font-weight: 700;
  line-height: 0.3;
  margin-left: 10%;
`;
