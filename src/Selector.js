import styled from "styled-components";

const Selector = ({id, value, setValue})=> {
    
    return (
        <>
            <Select onChange={(e) => setValue(id, e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
            </Select>
        </>
    )
}
 
const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.5rem 1rem;
    width: 10%;
    border-radius: 5px;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
`


export default Selector;
