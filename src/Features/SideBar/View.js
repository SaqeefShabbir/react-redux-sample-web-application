import logo from '../../images/restaurant_logo.png';
import user from '../../images/user.jpg';
import { useLocation } from "react-router-dom";

const View = (props) => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/Main" className="brand-link">
                <img src={logo} alt="Restaurant logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                <span className="brand-text font-weight-light">Restaurant</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={user} alt="User" className="img-circle elevation-2" />
                    </div>
                    <div className="info">
                        <a href="/Main" className="d-block">Conure Superuser</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
                        <li className="nav-item">
                            <a href="/Main" className={splitLocation[1] === "Main" && !splitLocation[2] ? "nav-link active" : "nav-link"}>
                                <i className="nav-icon fas fa-hamburger"></i>
                                <p>
                                    Menu
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Main/Order" className={splitLocation[2] === "Order" ? "nav-link active" : "nav-link"}>
                                <i className="nav-icon fas fa-shopping-cart"></i>
                                <p>
                                    Order
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default View;