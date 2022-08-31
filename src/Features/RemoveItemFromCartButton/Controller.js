import React from 'react';
import View from './View';
import { connect } from "react-redux";
import { removeItemFromCartAsync } from '../Order/Reducer';

class RemoveItemFromCartButton extends React.Component {
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
    removeItemFromCart: async (id) => {
        removeItemFromCartAsync(dispatch, id);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveItemFromCartButton);