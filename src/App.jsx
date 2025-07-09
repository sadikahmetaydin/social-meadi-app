import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage"
import Home from "./pages/Home"
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth" element={ <AuthPage />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
      </Routes>
    </Router>
  )
}
export default App