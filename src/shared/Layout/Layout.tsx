import { Outlet } from "react-router-dom";
import Nav from "../../scenes/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main className="p-5 max-w-[750px] mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
