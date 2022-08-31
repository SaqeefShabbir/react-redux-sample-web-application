import fries from '../../images/items/fries.jpg';
import burger from '../../images/items/burger.jpg';
import pizza from '../../images/items/pizza.jpg';
import sandwich from '../../images/items/sandwich.jpg';
import noodles from '../../images/items/noodles.jpg';
import pepsi from '../../images/items/pepsi.jpg';
import milkshake from '../../images/items/milkshake.jpg';
import donut from '../../images/items/donut.jpg';
import AddItemToCartButton from '../AddItemToCartButton/Controller';

const View = (props) => {
    const { id, title, price } = props;

    const height = window.innerHeight < 1200 ? (window.innerHeight < 400 ? '10em' : '13em') : '18em';

    return (
        <div class="col-md-3">
            <div class="card card-outline card-primary">
                <div class="card-header">
                    <h3 class="card-title">{title}</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <img src={
                        title === "Fries" ? fries : title === 'Burger' ? burger : title === 'Pizza' ? pizza : title === 'Sandwich' ? sandwich : title === 'Noodles' ? noodles : title === 'Pepsi' ? pepsi : title === 'Milk Shake' ? milkshake : title === 'Donut' ? donut : ''
                    }
                        alt={title}
                        style={{ objectFit: 'cover', height: height, width: '100%' }} />
                    <hr></hr>
                    <h4>${price}</h4>
                    <AddItemToCartButton id={id} title={title} price={price}></AddItemToCartButton>                    
                </div>
            </div>
        </div>
    );
}

export default View;