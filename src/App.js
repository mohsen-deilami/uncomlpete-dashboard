import routes from "./routes";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Topbar from "./Componnent/topbar/Topbar";
import Sidebar from "./Componnent/sidebar/Sidebar";

export default function App() {
  let routesList = useRoutes(routes);

  return (
    <>
      <Topbar />

      <div className="container">
        <Sidebar />
        {routesList}
      </div>
    </>
  );
}
