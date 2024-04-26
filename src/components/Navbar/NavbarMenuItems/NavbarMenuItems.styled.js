import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  width: 261px;
  height: 40px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  padding: 5px 11px;
  margin-bottom: 7px;
`;

export const TitleNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.43;
  color: rgb(163, 174, 208);
  padding: 5px 25px 5px 5px;

  &.active {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
`;

export const Image = styled.img`
  padding: 8px 10px;
`;

export const ActiveImage = styled.img`
  width: 35px;
  height: 30px;
  color: rgb(0, 0, 0);
  background: rgb(87, 145, 234);
`;
