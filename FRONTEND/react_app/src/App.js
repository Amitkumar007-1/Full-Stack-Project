
import './App.css';
import Navbar from './Component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css'
import Menus from './Component/Menus';
import Home from './Component/Home';
import Registration from './Component/Registration';
import AllEmployee from './Component/AllEmployee';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update_Employee from './Component/Update_Employee';
import { Bounce, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Router>
      <ToastContainer position= "top-center"
          autoClose= {5000}
          hideProgressBar= {true}
          theme= 'colored'
          transition={Bounce} />
        <div className="App">
          <Navbar />
          <div className='container'>
            <div className='row mt-3 '>
              <div className='col-md-4 '>
                <Menus />
              </div>
              <div className='col-md-8 '>
                <Routes>
                  <Route path='/' Component={Home} exact />
                  <Route path='/Registration' Component={Registration} exact />
                  <Route path='/AllEmployee' Component={AllEmployee} exact />
                  <Route path='/About' Component={About} exact/>
                  <Route path='/Update_Employee/:id' Component={Update_Employee} exact/>
                </Routes>



              </div>
            </div>

          </div>
        </div>
      </Router>
    </div>

  );
}

export default App;
