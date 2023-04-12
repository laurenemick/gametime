import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ItemDetails from './components/ItemDetails';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<SearchBar />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
