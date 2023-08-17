import styled from "styled-components";

const Button = ({text, func, ...rest})=> {

    return (
        <BtnStyle {...rest} onClick={func}>{text}</BtnStyle>
    )
}

const BtnStyle = styled.button`
    padding: 0.5rem 1rem;
    border: 0;
    border: 1px solid ${props => props.primary ? "#18e014" : props.secondary ? "#f55b60" : props.tertiary ? "#18e014" :"#f55b60"};
    color: ${props => props.primary ? "#18e014" : props.warning || props.tertiary ? "#ffffff" : props.secondary ? "#f55b60" : ""};
    background: ${props => props.warning ? "#f55b60" :props.tertiary ? "#18e014" : "#ffffff"};
    border-radius: 5px;
    cursor: pointer;
    
`

export default Button;
