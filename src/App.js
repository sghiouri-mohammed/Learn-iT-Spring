import './App.css';
import Profile from './components/Profile';
import Connexion from './components/Connexion';
import CoursList from './components/CoursList';
import Dashboard from './components/Dashboard';
import DashboardInst from './components/DashboardInst';
import Questions from './components/Questions';
import QuizzList from './components/QuizList';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  let component 
  switch (window.location.pathname){

      case "/":
        component = <Dashboard/> 
        break

      case "/Connexion" :
        component = <Connexion/>
        break

      case "/QuizList":
        component = <QuizzList/> 
        break

      case "/Questions" :
        component = <Questions/>
        break
      
      case "/Register":
        component = <Register/>
        break
      
      case "/CoursList":
        component = <CoursList/>
        break
      
      case "/DashboardInst":
        component = <DashboardInst/>
        break

        default : component = <Dashboard/>
  
      }

  return (
    <div className="App">
      <NavBar/>
        {component}
      <Footer/>
    </div>
  );

}

export default App;
