const View = (props) => {
    const { id, removeItemFromCart } = props;

    return (
        <button id={id} type="button" class="btn btn-block btn-warning"
            onClick={() =>
                removeItemFromCart(id)
            }
        >remove from cart</button>
    );
}

export default View;