import './App.css';
import Profile from './components/Profile';
import Connexion from './components/Connexion';
import CoursList from './components/CoursList';
import Dashboard from './components/Dashboard';
import DashboardInst from './components/DashboardInst';
import Questions from './components/Questions';
import QuizzList from './components/QuizList';
import Register from './components/Register';
import AddCourse from './components/AddCourse';
import AddQuiz from './components/AddQuiz';
import ModifyCourse from './components/ModifyCourse';
import StudentsList from './components/StudentsList';
import ModifyQuiz from './components/ModifyQuiz';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  let component 
  let component1 
  let component2 

  switch (window.location.pathname){

      case "/":
        component = <DashboardInst/> 
        component1= <NavBar/>
        component2= <Footer/>
        break

      case "/Connexion" :
        component = <Connexion/>
        component1=null
        component2= null
        break

      case "/QuizList":
        component = <QuizzList/> 
        component1= <NavBar/>
        component2= <Footer/>
        
        break

      case "/Questions" :
        component = <Questions/>
        component1= <NavBar/>
        component2= <Footer/>
        break
      
      case "/Register":
        component = <Register/>
        break
      
      case "/CoursList":
        component = <CoursList/>
        component1= <NavBar/>
        component2= <Footer/>
        break
      
      case "/ModifyQuiz":
        component = <ModifyQuiz/>
        component1= <NavBar/>
        component2= <Footer/>
        break
      
      case "/StudentsList":
        component = <StudentsList/>
        component1= <NavBar/>
        component2= <Footer/>
        break
      
      case "/AddCourse":
        component = <AddCourse/>
        component1= <NavBar/>
        component2= <Footer/>
        break

        case "/ModifyCourse":
          component = <ModifyCourse/>
          component1= <NavBar/>
        component2= <Footer/>
          break

      case "/AddQuiz":
        component = <AddQuiz/>
        component1= <NavBar/>
        component2= <Footer/>
        break  
      
        case "/Profile":
          component = <Profile/>
          component1= null
          component2= null
          break   

      case "/DashboardInst":
        component = <DashboardInst/>
        component1= <NavBar/>
        component2= <Footer/>
        break

        default : component = <Dashboard/>
  
      }

  return (
    <div className="App">
        {component1}
        {component}
        {component2}
    </div>
  );

}

export default App;
