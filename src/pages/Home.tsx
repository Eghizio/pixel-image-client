import { Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Path } from "../routing/Router";

export const HomePage = () => (
  <Layout>
    <h1>Home</h1>
    <Navigate to={Path.Auth} replace />
  </Layout>
);
