import styled from 'styled-components';
import Header from "./Componentes/Header";

const AppContainer = styled.div `
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg, #002F52 35%, #326589);


li {
  list-style: none;
}

`

function App() {

  return (
    <div className="App">
      <AppContainer> 
     <Header />
     </AppContainer>
    </div>
  );
}

export default App;
