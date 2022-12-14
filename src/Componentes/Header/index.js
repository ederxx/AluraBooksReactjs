import OpcoesHeader from "../../Componentes/OpcoesHeader";
import IconesHeader from "../../Componentes/IconesHeader";
import Logo from "../../Componentes/Logo"
import styled from "styled-components";

const HeaderContainer = styled.header `
background-color: #FFF;
display: flex;
justify-content: center;


`

function Header() {
    return(
  <HeaderContainer>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
        </HeaderContainer>

    )
    
}


export default Header