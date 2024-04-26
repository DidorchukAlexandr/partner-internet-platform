import { Btn } from "./Button.styled";
const Button = ({type = 'submit', children}) => {
    return (
        <Btn type={type}>{children}</Btn>
    )
}
export default Button;