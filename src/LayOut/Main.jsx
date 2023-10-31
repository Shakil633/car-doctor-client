import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
