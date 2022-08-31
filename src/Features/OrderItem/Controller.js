import View from './View';
import { connect } from "react-redux";
import React from 'react';

class OrderItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       
    }

    render() {

        return (
            <View {...this.props}></View>
        );
    }
}

const mapStateToProps = state => ({
 
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);