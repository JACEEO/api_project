import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApiBox from "./components/ApiBox.tsx";
import Header from "./components/Header.tsx";
import Login from "./components/Login.tsx";
import NaverLogin from "./components/NaverLogin.tsx";
import Navigate from "./components/Navigate.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ApiBox />} />
        <Route path="/navigate" element={<Navigate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/naverlogin" element={<NaverLogin />} />
      </Routes>
    </>
  );
}

export default App;
