import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './account/signIn';
import SignUp from './account/signUp';
import Dashboard from './admin/dashboard';
import ListUser from './admin/users/ListUser';
import UpdateUser from './admin/users/UpdateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list-user' element={<ListUser />} />
          <Route path='/update-user' element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
