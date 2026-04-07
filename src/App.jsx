import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import Room from "./pages/Room";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import "./styles/dashboard.css";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isDashboard && !isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/room/:code" element={<Room />} />
      </Routes>
    </>
  );
}

export default App