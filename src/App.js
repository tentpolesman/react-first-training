import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/categories/:name" element={<CategoryDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
