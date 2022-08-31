import View from './View';
import {
    removeAuthUser,
} from '../Login/Reducer';
import React from 'react';
import { connect } from "react-redux";

class Header extends React.Component {
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
    removeCredentials: async () => {
        dispatch(removeAuthUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);