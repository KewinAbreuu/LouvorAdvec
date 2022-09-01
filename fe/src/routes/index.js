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
    </Switch>
  )
}
