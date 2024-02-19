import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './view/MainPage';
import LoginPage from './view/Login'
import Register from './view/Register';
import Application from './view/Application';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewModel from './viewModel/ViewModel';

const root = ReactDOM.createRoot(document.getElementById('root'));
const viewModel = new ViewModel();
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route path="/" element={<MainPage viewModel={viewModel}/>} />
    <Route path="/login" element={<LoginPage viewModel={viewModel}/>} />
    <Route path="/register" element={<Register viewModel={viewModel}/>} />
    <Route path="/application" element={<Application viewModel={viewModel}/>} />
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
