import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import "./App.css"
import Login from "./Components/Login";

function App() {
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
       
       </BrowserRouter>
    </>
  );
}

export default App;
