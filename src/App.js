import React from "react";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import { ArticleProvider } from "./ArticleContext";
import "./style.css"
import ArtcileDisplay from "./Components/ArticleDisplay";
import ArticleDetail from "./Components/ArticleDetail";

function App() {
  return (
    <div>
      <ArticleProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:catag" element={<ArtcileDisplay/>} />
            <Route path="/category/:catag/:catagId" element={<ArticleDetail/>}/>
          </Routes>
        </Router>
      </ArticleProvider>
    </div>
  );
}

export default App;