import styled from "styled-components";

const Input = ({value, setValue}) => <InputText type= "text" value={value} onChange={setValue}/>;


const InputText = styled.input`
    width: 60%;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid;
`
export default Input;
