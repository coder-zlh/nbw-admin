import React, { Component } from 'react';
import { connect } from 'react-redux';

import { test } from '../redux/actions/authentication'

export class HomePage extends Component {
    componentDidMount(){
        this.props.test();
    }
    render() {
        return (
            <div>
                Home page: {this.props.authentication.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
})

const mapDispatchToProps = {
    test
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
