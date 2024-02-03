import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif

  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Campo = styled.input`
  border-radius: 8px;
  width: 100%;
  height: 32px;
  color: ${variaveis.cinza};
  border-color: ${variaveis.cinza};
  background-color: ${variaveis.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
`

export const Botao = styled.button`
  background-color: ${variaveis.azulEscuro};
  font-size: 12px;
  font-weight: bold;
  color: ${variaveis.branco};
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
}
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
