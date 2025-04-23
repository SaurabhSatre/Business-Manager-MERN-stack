// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/login.js';
import SignUpPage from './screens/signup.js';
import CustomerAppointments from './screens/customer.js';
import EmployeePanel from './screens/employee.js';
import Home from './screens/Home.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerAppointments />} />
        <Route path="/employee" element={<EmployeePanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;