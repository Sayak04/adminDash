import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
