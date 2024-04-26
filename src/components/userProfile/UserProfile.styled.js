import styled from "styled-components";

export const ProfileWrap = styled.div`
  border-radius: 10px;
  background: rgb(255, 255, 255);
  max-width: 1380px;
  height: 550px;
  padding: 18px;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 65px;
  height: 135px;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    rgb(111, 169, 255) 2.847%,
    rgb(52, 112, 202) 50.152%,
    rgb(0, 72, 179) 97.456%
  );
`;

export const Text = styled.span`
  color: rgb(255, 255, 255);
  font-family: DM Sans;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.15;
  padding-left: 30px;
`;

export const Image = styled.img`
  width: 282px;
  height: 272px;
  margin: 24px 84px auto auto;
`;
