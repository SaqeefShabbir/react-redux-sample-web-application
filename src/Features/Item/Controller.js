import React from 'react';
import View from './View';
import { connect } from "react-redux";
import { addItemToCartAsync } from '../Order/Reducer';

class Item extends React.Component {
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
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);