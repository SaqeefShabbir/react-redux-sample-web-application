import Header from '../Header/Controller';
import SideBar from '../SideBar/Controller';
import Dashboard from '../Dashboard/Controller';
import Footer from '../Footer/Controller';

const View = (props) => {
    return (
        <div className="wrapper">
            <Header></Header>
            <SideBar></SideBar>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    );
}

export default View;