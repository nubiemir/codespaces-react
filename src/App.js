import styled from "styled-components";
import Button from "./Components/Button";
import Row from "./Components/Row";

function App() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Button primary text="Add Row"  func={()=> console.log("HI")} />
        </div>
        <ul>
          <li><Row/></li>
        </ul>
        
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
  background: lightblue;
  width: 60%;
`

export default App;
