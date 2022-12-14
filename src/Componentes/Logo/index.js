import styled from 'styled-components'
import logo from '../../imagens/logo.svg'  
import  '../Logo/estilo.css'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right:10px ;
`


function Logo() {
    return(
<LogoContainer>
        <LogoImg src={logo} alt='Logo' className='logo-img'></LogoImg>
        <p><strong> Alura  </strong>  Books</p>
 </LogoContainer>

    )
    
}


export default Logo