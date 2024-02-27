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
import RecruiterView from './view/RecruiterView';

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
    <Route path="/recruiterView" element={<RecruiterView viewModel={viewModel}/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

