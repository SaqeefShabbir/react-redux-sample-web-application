import { useLocation } from "react-router-dom";
import Cart from '../Cart/Controller';

const View = (props) => {
    const { removeCredentials } = props;

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="/Main" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block" className={splitLocation[1] === "Main" && !splitLocation[2] ? "active" : ""}>
                    <a href="/Main" class="nav-link">Menu</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block" className={splitLocation[2] === "Order" ? "active" : ""}>
                    <a href="/Main/Order" class="nav-link">Order</a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <Cart></Cart>
                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" role="button"
                        onClick={() =>
                            removeCredentials()
                        }
                    >
                        <i class="fas fa-sign-out-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default View;