import styled from "styled-components";
import Button from "./Components/Button";
import Row from "./Components/Row";
import { useEffect, useState } from "react";

function App() {
  const [rowData, setRowData] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddRow = () => {
    setRowData(prev => [...prev, {id: new Date().getTime(), sign: "+", value: "", disabled: false}])
  }

  const handleDelete = (id) => {
    const data = rowData.filter(data => data.id !== id);
    setRowData(data);
  }

  const handleDisabled = (id) => {
    const data = rowData.map(data => {
      if (data.id === id){
        data.disabled = !data.disabled;
      }
      return data
    })
    setRowData(data);
  }

  const handleInputChange = (id, value) => {
    const data = rowData.map(data => {
      if (data.id === id){
        data.value = value;
      }
      return data;
    })
    setRowData(data);
  }

  const handleSelectorChange = (id, value) => {
    const data = rowData.map(data => {
      if (data.id === id){
        data.sign = value;
      }
      return data;
    })
    setRowData(data);
  }


  const handleTotal = ()=>{
    let sum = 0;

    rowData.forEach(data => {
      if (!data.disabled){
        if (data.sign === "+"){
          sum += Number(data.value);
        } 
        if (data.sign === "-"){
          sum -= Number(data.value);
        }
      }
    })
    setTotal(sum)
  }

  useEffect(()=> {
    handleTotal();
  }, [rowData])

  return (
    <Wrapper>
      <Container>
        <AddBtnContainer>
          <Button primary text="Add Row"  func={handleAddRow} />
        </AddBtnContainer>
        <List>
          {!rowData.length && <span style={{color: "red", marginLeft: "2rem"}}>Sorry Please Add Data first</span>}
          {rowData.map(data => {
            return <li><Row data = {data} key={data.id} handleDelete={() => handleDelete(data.id)} handleDisabled = {() => handleDisabled(data.id)} handleInputChange = {handleInputChange} handleSelectorChange = {handleSelectorChange}/></li>;
          })}
        </List>
        <div>result: {total}</div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  width: 60%;
`

const AddBtnContainer = styled.div`
  margin-bottom: 2rem;
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default App;
