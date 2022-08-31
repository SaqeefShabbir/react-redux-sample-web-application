import Item from '../Item/Controller';
import LoadingView from './LoadingView';

const View = (props) => {
    const { items, isLoading } = props;

    const itemRender = (item) => <Item id={item.id} title={item.title} price={item.price} />;

    function itemsIterate() {
        return Object.values(items)
            .map(item => itemRender(item));
    };

    const menu = itemsIterate();

    const total = menu.length;

    return (
        <>
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Menu</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/Main">Menu</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <h5 class="mb-2">Items {total}</h5>
                    <div class="row">
                        {
                            isLoading && <LoadingView></LoadingView>
                        }
                        {
                            menu.length > 0 && !isLoading &&
                            <>
                                {menu}
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default View;