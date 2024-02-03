import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remove, editar } from '../../Store/Reducers/Contatos'
import ContatoClass from '../../Models/Contatos'

import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'

type Props = ContatoClass

const Contatos = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(telefoneOriginal)

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  const cancelar = () => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setEstaEditando(false)
  }

  const salvar = () => {
    dispatch(
      editar({
        nome,
        id,
        telefone,
        email
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.Msg>Editando contato: {nomeOriginal}</S.Msg>
        </>
      ) : (
        ''
      )}
      <label>Nome:</label>
      <S.Input
        value={nome}
        disabled={!estaEditando}
        placeholder={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <label>Email:</label>
      <S.Input
        value={email}
        disabled={!estaEditando}
        placeholder={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <label>Telefone:</label>
      <S.Input
        value={telefone}
        disabled={!estaEditando}
        placeholder={telefone.toString()}
        onChange={(e) => setTelefone(Number(e.target.value))}
      />
      <S.BarraAcaoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvar}>Salvar</BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={cancelar}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemoverCancelar onClick={() => dispatch(remove(id))}>
              Remover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcaoes>
    </S.Card>
  )
}

export default Contatos
