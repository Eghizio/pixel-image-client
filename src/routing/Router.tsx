import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { AuthPage } from "../pages/Auth";
import { DashboardPage } from "../pages/Dashboard";
import { NotFoundPage } from "../pages/NotFound";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
