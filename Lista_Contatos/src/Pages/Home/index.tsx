import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../Containers/BarraLateral'
import ListaContatos from '../../Containers/ListaContatos'

const Home = () => (
  <>
    <BarraLateral MostrarBotaoVoltar={false} />
    <ListaContatos />
    <BotaoAdicionar />
  </>
)

export default Home
