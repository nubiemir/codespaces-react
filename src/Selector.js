import styled from "styled-components";

const Selector = ({value, setValue})=> {
    
    return (
        <>
            <Select value={value} onChange={setValue}>
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
`


export default Selector;
