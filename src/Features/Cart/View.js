const View = (props) => {
    const { totalItems } = props;

    return (
        <li class="nav-item">
            <a class="nav-link" href="/Main/Order">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge badge-warning navbar-badge">{totalItems}</span>
            </a>
        </li>
    );
}

export default View;