import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "./Application/Auth/AuthLogin";
import ProtectedRoute from "./Application/Auth/ProtectedRoute";
import ChatboatLandingpage from "./Application/chatboat/ChatboatLandingpage";


function App() {
  const isAuth = sessionStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route
          path="/"
          element={isAuth ? <Navigate to="/dashboard" /> : <AuthLogin />}
        />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
             <ChatboatLandingpage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
