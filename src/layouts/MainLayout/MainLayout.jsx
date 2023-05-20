import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../../pages/shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="">
            <Header />
            <div style={{minHeight: '40vh'}}>
                <Outlet></Outlet>
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default MainLayout;