import { Switch } from 'react-router-dom'
import Route from './Route'

import SelectCompany from '../pages/SelectCompany'
import SelectLogin from '../pages/SelectLogin'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Escalas from '../pages/Escalas'

export default function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={SelectCompany} />
      <Route exact path="/selectLogin" component={SelectLogin} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/home" component={Home} isPrivate />
      <Route exact path="/escalas" component={Escalas} isPrivate />
    </Switch>
  )
}
