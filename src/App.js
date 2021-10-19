import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import MedicalService from './pages/Services/MedicalService/MedicalService';
import Treatment from './pages/Services/Treatment/Treatment';
import Service from './pages/Services/Treatment/Service';
import MediServiceDetails from './pages/Services/MedicalService/MediServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Logins/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Logins/PrivateRoute/PrivateRoute';

import GetAppointment from './pages/Doctors/GetAppointment/GetAppointment';



function App() {
  return (
    <div className="">
      <AuthProvider>
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

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute exact path='/treatment/:details'>
              <Service></Service>
            </PrivateRoute>

            <Route exact path='/medicalServices'>
              <MedicalService></MedicalService>
            </Route>

            <PrivateRoute exact path='/medicalService/:details'>
              <MediServiceDetails></MediServiceDetails>
            </PrivateRoute>

            <Route exact path='/doctors'>
              <Doctors></Doctors>
            </Route>

            <PrivateRoute exact path='/doctor/:appoint'>
              <GetAppointment></GetAppointment>
            </PrivateRoute>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
