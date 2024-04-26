import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 108px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
`;

export const Reg = styled(NavLink)`
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  margin-bottom: 10px;
  color: #a3aed0;

  &.active {
    font-weight: 600;
    font-size: 20px;
    color: #000000;
  }
`;

export const Log = styled(NavLink)`
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  text-decoration: none;
  color: #a3aed0;

  &.active {
    font-weight: 600;
    font-size: 20px;
    color: #000000;
  }
`;
