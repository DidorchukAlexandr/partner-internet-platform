import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import mainLogo from "../../components/images/mainLogo.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Wrap, Image, Title, PageWrap } from "./LoginPage.styled";
import Container from "../../components/Container/Container";


const LoginPage = () => {
const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }

    return (
         <Container>
            <PageWrap>
                <LoginForm onSubmit={onLogin} />
            </PageWrap>
           
             <div style={{
                    display: "flex",
                    width: "50%",
                    height: "100vh",
                    background: "rgb(255, 255, 255)",
            }}>
            <Wrap>
                <div style={{
                        display: "block",
                    marginLeft: "23%",
                     }}>
                <Image src={mainLogo}
                    alt="mainLogo" />
                    <Title>Analytix</Title>
                    </div>
            </Wrap>
            </div>
        </Container>
    )
}

export default LoginPage;