import React from 'react';
import View from './View';
import { connect } from "react-redux";
import { getItemsAsync } from './Reducer';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <View {...this.props}></View>
        );
    }
}

const mapStateToProps = state => ({
    items: state.menu.items,
    isLoading: state.menu.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchItems: async () => {
        getItemsAsync(dispatch);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);