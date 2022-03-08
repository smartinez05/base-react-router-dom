import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<h1>Welcome</h1>} />
          <Route path="goodbye" element={<h1>Goodbye</h1>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
