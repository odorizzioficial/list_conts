import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: ${variaveis.branco2};
  box-shadow: 0px 4px 4px ${variaveis.sombra};
  padding: 16px;
  margin-top: 40px;
`
export const Input = styled.input`
  border: none;
  width: 100%;
  background-color: ${variaveis.branco2};
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 14px;
  display: flex;
`

export const Msg = styled.h2`
  font-family: 'Roboto Mono';
  padding-bottom: 18px;
  color: ${variaveis.laranja};
`

export const BarraAcaoes = styled.div`
  padding: 16px;
  margin-top: 16px;
  border-top: 1px solid ${variaveis.sombraFraca};
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
