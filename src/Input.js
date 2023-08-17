import styled from "styled-components";

const Input = ({id, value, setValue}) => <InputText type= "number" value={value} onChange={(e)=>setValue(id, e.target.value)}/>;


const InputText = styled.input`
    width: 60%;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid;
`
export default Input;
