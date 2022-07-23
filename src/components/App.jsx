import Home from './Home.jsx'
import { Route, Switch} from 'react-router-dom'
import {AnimatePresence} from '../framer-motion.d.ts'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      {/* <Nav/> */}
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            // <Home/>
          </Route>
          {/* <Route path="/Welcome">
            <Welcome/>
          </Route>
          <Route path="/Introduction">
            <IntroductionDiv/>
          </Route>
          <Route exact path="/Hobbies">
            <HobbiesDiv/>
          </Route>
          <Route exact path="/Projects">
            <ProjectsDiv/>
          </Route> */}
         
        </Switch>
      </AnimatePresence>
     
      // <Footer/>
    </>
  );
}

export default App;
