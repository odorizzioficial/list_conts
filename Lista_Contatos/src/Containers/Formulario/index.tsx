import { FormEvent, useState } from 'react'
import { Container, Campo } from './styles'
import { BotaoSalvar } from '../../styles'
import { useDispatch } from 'react-redux'
import { salvar } from '../../Store/Reducers/Contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(Number())
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      salvar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <h1>Nova Tarefa</h1>
      <Campo>
        <form onSubmit={cadastrarContato}>
          <input
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Nome Completo"
          />
          <input
            onChange={({ target }) => setEmail(target.value)}
            type="text"
            placeholder="E-mail"
          />
          <input
            onChange={({ target }) => setTelefone(Number(target.value))}
            type="text"
            placeholder="Telefone"
          />
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </form>
      </Campo>
    </Container>
  )
}

export default Formulario
