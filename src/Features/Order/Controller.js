import React from 'react';
import View from './View';
import { connect } from "react-redux";
import { getOrderItemsAsync, removeOrderItemsAsync } from './Reducer';

class Order extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOrderItems();
    }

    render() {
        return (
            <>
                <View {...this.props}></View>
            </>
        );
    }
}

const mapStateToProps = state => ({
    orderItems: state.order.orderItems,
    totalItems: state.order.totalItems,
    isLoading: state.order.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchOrderItems: async () => {
       getOrderItemsAsync(dispatch);
    },
    removeOrderItems: async () => {
        removeOrderItemsAsync(dispatch);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);