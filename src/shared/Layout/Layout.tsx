import { Outlet } from "react-router-dom";
import Nav from "../../scenes/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
