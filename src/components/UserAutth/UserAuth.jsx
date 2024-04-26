import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import headerIcon from "../images/headerIcon.png";

import { ImageWrap, Image, Btn } from "./UserAuth.styled";

const UserAuth = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
      <>
          <ImageWrap>
                <Btn onClick={onLogout}>
              {name}
              <Image src={headerIcon} />
              Logout
          </Btn>
            </ImageWrap>
          
    </>
  );
};

export default UserAuth;
