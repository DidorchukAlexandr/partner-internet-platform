import { FormGroup, Label, Input } from "./TextField.styled";

const TextField = ({ label, ...props }) => {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input {...props}/>
        </FormGroup>
    )
}

export default TextField;