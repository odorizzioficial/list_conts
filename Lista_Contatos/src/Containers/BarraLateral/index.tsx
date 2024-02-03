import { Aside, BotaoVoltar } from './styles'

type Props = {
  MostrarBotaoVoltar: boolean
}
const BarraLateral = ({ MostrarBotaoVoltar }: Props) => (
  <Aside>
    {MostrarBotaoVoltar && (
      <BotaoVoltar to="/">Voltar para a lista de contatos</BotaoVoltar>
    )}
  </Aside>
)

export default BarraLateral
