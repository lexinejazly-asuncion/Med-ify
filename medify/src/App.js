/* 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import MedicalRecords from "./pages/MedicalRecords";
import Prescriptions from "./pages/Prescriptions";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "User", role: "Receptionist" });

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN SCREEN */}
        <Route path="/login" element={
          isLoggedIn
            ? <Navigate to="/dashboard" />
            : <LoginPage onLogin={() => setIsLoggedIn(true)} />
        } />

        {/* MAIN LAYOUT */}
        <Route path="/" element={
          isLoggedIn
            ? <Layout userInfo={userInfo} onLogout={() => setIsLoggedIn(false)} />
            : <Navigate to="/login" />
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients" element={<Patients />} /> 
          <Route path="appointments" element={<Appointments />} /> 
          <Route path="medical-records" element={<MedicalRecords />} /> 
          <Route path="prescriptions" element={<Prescriptions />} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
