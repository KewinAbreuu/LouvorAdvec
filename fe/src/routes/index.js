import { Switch } from 'react-router-dom'
import Route from './Route'

import SelectCompany from '../pages/SelectCompany'
import SelectLogin from '../pages/SelectLogin'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Escalas from '../pages/Escalas'
import AddEscalas from '../pages/AddEscalas'
import AddMusicas from '../pages/AddMusicas'
import Repertorios from '../pages/Repertorios'
import AddRepertorio from '../pages/AddRepertorio'
import Liders from '../pages/Liders'
import Mensagens from '../pages/Mensagens'
import Membros from '../pages/Membros'
import Avisos from '../pages/Avisos'
import Comunicar from '../pages/Comunicar'
import Indisponibilidade from '../pages/Indisponibilidade'

export default function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={SelectCompany} />
      <Route exact path="/selectLogin" component={SelectLogin} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/home" component={Home} isPrivate />
      <Route exact path="/escalas" component={Escalas} isPrivate />
      <Route exact path="/addEscalas" component={AddEscalas} isPrivate />
      <Route exact path="/addMusicas" component={AddMusicas} isPrivate />
      <Route exact path="/repertorios" component={Repertorios} isPrivate />
      <Route exact path="/addRepertorio" component={AddRepertorio} isPrivate />
      <Route exact path="/liders" component={Liders} isPrivate />
      <Route exact path="/mensagens" component={Mensagens} isPrivate />
      <Route exact path="/membros" component={Membros} isPrivate />
      <Route exact path="/avisos" component={Avisos} isPrivate />
      <Route exact path="/comunicar" component={Comunicar} isPrivate />
      <Route exact path="/indisponibilidade" component={Indisponibilidade} isPrivate />
    </Switch>
  )
}
