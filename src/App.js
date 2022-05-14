import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ListModal from './Components/ListModal';
import Search from './Components/Search';
import SearchByEnroll from './Components/SearchByEnroll';
import StudentProfile from './Components/StudentProfile';
import AuthProveder from './context/AuthContext';
import DashboardProfileAuth from './Components/Dashboard_profile_auth';
import PrivateRoute from './Components/PrivateRoute';
import ForgetPass from './Components/Forget_pass';
import updateProfile from './Components/updateProfile';



function App() {
  return (

    <Router>
      <Navbar />
      <AuthProveder>
        <Switch>
          <Route exact path='/signup'><Signup /></Route>
          <Route exact path='/forgetpassword'><ForgetPass /></Route>
          <Route exact path='/signin'><Login /></Route>
          <PrivateRoute exact path='/profile' component={DashboardProfileAuth}></PrivateRoute>
          <PrivateRoute exact path='/' component={Home}></PrivateRoute>
          <PrivateRoute exact path='/collegelist' component={ListModal}></PrivateRoute>
          <PrivateRoute exact path='/query/name' component={Search}></PrivateRoute>
          <PrivateRoute exact path='/query/enroll' component={SearchByEnroll}></PrivateRoute>
          <PrivateRoute exact path='/profile/update' component={updateProfile}></PrivateRoute>
          <PrivateRoute exact path='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v' component={StudentProfile}></PrivateRoute>
        </Switch>
      </AuthProveder>
      <Footer />
    </Router>



  );
}

export default App;
