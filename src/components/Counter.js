import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.count} <button type="button" onClick={this.handleClick}>increment</button></h2>
            </div>
        );
    }

    handleClick = () => {

        this.props.dispatch(increment());

    }

}

const mapStateToProps = (storeState) => ({
    count: storeState.counter
});

export default connect(mapStateToProps)(Counter);
