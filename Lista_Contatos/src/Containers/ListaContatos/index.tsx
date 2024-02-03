import Contatos from '../../Components/Contatos'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../Store'
import { useSelector } from 'react-redux'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map((item) => (
          <li key={item.nome}>
            <Contatos
              nome={item.nome}
              email={item.email}
              telefone={item.telefone}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaContatos
