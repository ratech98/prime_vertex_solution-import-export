import { Outlet, Link } from "react-router-dom";
import IMAGE from "../images/image";
import Footer from '../../components/properties/footer'
import HeaderNav from "../properties/headerNav";

const Layout = () => {
  return (
    <>
        <HeaderNav/>
        <Outlet />
        <Footer/>
    </>
  )
};

export default Layout;