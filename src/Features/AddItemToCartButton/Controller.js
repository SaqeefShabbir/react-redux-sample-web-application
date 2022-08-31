import React from 'react';
import View from './View';
import { connect } from "react-redux";
import { addItemToCartAsync } from '../Order/Reducer';

class AddItemToCartButton extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <View {...this.props} ></View>
        );
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    addItemToCart: async (orderItem) => {
        addItemToCartAsync(dispatch, orderItem);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemToCartButton);