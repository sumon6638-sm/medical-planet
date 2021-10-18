import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Doctors from './pages/Home/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import MedicalService from './pages/Home/Services/MedicalService';
import Treatment from './pages/Home/Services/Treatment';


function App() {
  return (
    <div className="">
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/treatment'>
            <Treatment></Treatment>
          </Route>

          <Route exact path='/medicalServices'>
            <MedicalService></MedicalService>
          </Route>

          <Route exact path='/doctors'>
            <Doctors></Doctors>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
