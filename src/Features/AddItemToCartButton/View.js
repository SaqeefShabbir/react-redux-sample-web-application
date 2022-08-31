const View = (props) => {
    const { id, title, price, addItemToCart } = props;

    return (
        <button id={id} type="button" class="btn btn-block btn-primary"
            onClick={() =>
                addItemToCart({ title, price })
            }
        >add to cart</button>
    );
}

export default View;