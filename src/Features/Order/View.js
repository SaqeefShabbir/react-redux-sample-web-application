import OrderItem from '../OrderItem/Controller';
import LoadingView from './LoadingView';

const View = (props) => {
    const { orderItems, isLoading, removeOrderItems } = props;

    const itemRender = (orderItem) => <OrderItem id={orderItem.id} title={orderItem.title} price={orderItem.price} />;

    function itemsIterate() {
        return Object.values(orderItems)
            .map(orderItem => itemRender(orderItem));
    };

    let totalPrice = 0;

    if(orderItems) {
        orderItems.forEach(function (orderItem) {
            totalPrice += parseFloat(orderItem.price);
        });
    }

    totalPrice = totalPrice.toFixed(2);

    const order = itemsIterate();

    const total = order.length;

    return (
        <>
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Order</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/Main/Order">Order</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <h5 class="mb-2">Items {total}, Total Prcie ${totalPrice}</h5>
                    <div class="row">
                        {
                            isLoading && <LoadingView></LoadingView>
                        }
                        {
                            order.length > 0 && !isLoading &&
                            <>
                                {order}
                            </>
                        }
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-danger"
                                onClick={() =>
                                    removeOrderItems()
                                }
                            >cancel order</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default View;