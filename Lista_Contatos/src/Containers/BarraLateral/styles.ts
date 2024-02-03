import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Aside = styled.aside`
  background-color: ${variaveis.cinzaEscuro2};
  height: 100vh;
  padding: 16px;
`
export const BotaoVoltar = styled(Link)`
  width: 100%;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: ${variaveis.azulEscuro};
  color: ${variaveis.branco};
`
