import { Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";
import BasicDashboard from "./dashboard/Basic";
const DashboardPage = () => {
  return (
    <Layout>
      <BasicDashboard />
    </Layout>
  );
}

export default DashboardPage;