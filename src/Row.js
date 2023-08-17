import Selector from "./Selector";
import Input from "./Input";
import Button from "./Button";

const Row = ()=> {
    return (
        <>
            <Selector/>
            <Input/>
            <Button secondary text="Add Row" func={()=> console.log("HI")} />
            <Button warning text="Add Row" func={()=> console.log("HI")} />
        </>
    )
}

export default Row;
