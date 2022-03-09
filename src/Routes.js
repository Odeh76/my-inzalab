import Home from './pages/Home'
import Contact from './pages/Contact'
import ProgramsIP from './pages/ProgramsIP'
import ResourcesIP from './pages/ResourcesIP'
import Error from './pages/Error'
import MeetTheITOs from './pages/MeetTheITOs'
import TwentyFiveUnderTwentyFiveIP from './pages/TwentyFiveUnderTwentyFiveIP';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function ApplicationRouter() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/programs" component={ProgramsIP} />
          <Route exact path="/twentyfiveundertwentyfive" component={TwentyFiveUnderTwentyFiveIP} />
          <Route exact path="/resources" component={ResourcesIP} />
          <Route exact path="/meettheitos" component={MeetTheITOs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={Error} />
        </Switch>
        </BrowserRouter>  
    )
}

export default ApplicationRouter
