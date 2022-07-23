import Home from './Home.jsx'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
// import {AnimatePresence} from '../framer-motion.d.ts'
import Footer from './Footer.jsx'
function App() {
  return (
    <>
	  <Router>
      {/* <Nav/> */}
        <Switch>
          <Route exact path="/">
             {/* <Home/> */}
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
     
	  {/* <Footer/>  */}
	  </Router>
    </>
  );
}

export default App;
