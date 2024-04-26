import styled from "styled-components";

export const Item = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  height: 186px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  padding: 20px 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const Title = styled.h4`
  color: rgb(0, 0, 0);
  font-family: Public Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: rgb(163, 174, 208);
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;
