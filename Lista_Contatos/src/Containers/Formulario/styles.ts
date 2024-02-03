import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  padding: 40px;
`
export const Campo = styled.div`
  padding: 40px 0px 21px;
  display-inline: block;

  input {
    background-color: ${variaveis.branco};
    border: 2px solid ${variaveis.cinza};
    border-radius: 8px;
    width: 547px;
    display: block;
    margin-top: 16px;
    padding: 8px 20px;
  }

  button {
    margin-top: 20px;
  }
`
