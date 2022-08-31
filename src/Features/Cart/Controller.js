import View from './View';
import React from 'react';
import { connect } from "react-redux";
import { getOrderItemsAsync } from '../Order/Reducer';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOrderItems();
    }

    render() {
        return (
            <View {...this.props}></View>
        );
    }
}

const mapStateToProps = state => ({
    totalItems: state.order.totalItems
});

const mapDispatchToProps = dispatch => ({
    fetchOrderItems: async () => {
        getOrderItemsAsync(dispatch);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);