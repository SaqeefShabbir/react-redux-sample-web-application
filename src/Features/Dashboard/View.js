import { Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Controller';
import Order from '../Order/Controller';

const View = (props) => {
    return (
        <div class="content-wrapper">
            <Switch>
                <Route path="/Main" component={Menu} exact={true} type="private" />
                <Route path="/Main/Order" component={Order} exact={true} type="private" />
            </Switch>
        </div>
    );
}

export default View;