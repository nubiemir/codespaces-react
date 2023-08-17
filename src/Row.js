
import Selector from "./Selector";
import Input from "./Input";
import Button from "./Button";
import { styled } from "styled-components";

const Row = ({data, handleDelete, handleDisabled, handleInputChange, handleSelectorChange})=> {
    return (
        <RowStyle>
            <Selector id = {data.id} value = {data.value} setValue={handleSelectorChange}/>
            <Input id = {data.id} value = {data.value} setValue={handleInputChange}/>
            {data.disabled ? 
            <Button tertiary text="Enable" func={handleDisabled} /> :
            <Button secondary text="Disable" func={handleDisabled} /> }
            <Button warning text="Delete" func={handleDelete} />
        </RowStyle>
    )
}


const RowStyle = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Row;
