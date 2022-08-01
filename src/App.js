import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Header from "./components/Header";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="wrap">
      <Header auth={auth} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
