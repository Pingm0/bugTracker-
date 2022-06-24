
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import BugForm from "./componnents/AddBug/BugForm";
import AddProject from "./componnents/AddProject/AddProject";
import Login from "./views/LoginAndRegistration";
import Main from './views/Main.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/addBug/:projectId" element={<BugForm />} />
        <Route path="/addProject" element={<AddProject />} />



      </Routes>  
      </BrowserRouter>


    </div>
  );
}

export default App;
