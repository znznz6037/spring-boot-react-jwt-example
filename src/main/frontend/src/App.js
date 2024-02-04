import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./Home";
import Profile from "./auth/Profile";
import { RequireToken } from "./auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={
          <RequireToken>
            <Profile/>
          </RequireToken>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;