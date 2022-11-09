import logo from './logo.svg';
import './App.css';
import CarList from './components/CarList';
import { useAddNewPostMutation } from './api/car';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'
import AddCar from './components/AddCar';
import HomePage from './pages/HomePage';

function App() {
  const [addPost] = useAddNewPostMutation()
  return (
    <Router>
    <section className="App h-screen w-min-full flex justify-center items-center flex flex-wrap mt-7 space-y-4">
            
    <div className="w-full max-w-md bg-white-800">

      <h1>List of queue</h1>
          <Routes>
            <Route path="/"   element={<HomePage />}/>
        
            </Routes>    
 
                
      </div>
            
   
        
  </section>
  </Router>
  );
}

export default App;
