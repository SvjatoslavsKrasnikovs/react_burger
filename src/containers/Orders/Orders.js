import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = (props) => {
    console.log('hello');

    useEffect(() => {
        props.onFetchOrders(props.token, props.userId);
    }, []);

    let ord = <Spinner />
    if (!props.loading) {
        console.log('loading not positive');
        ord = props.orders.map(order => (
            <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={order.price} />));
    }
    return (
        <div>
            { ord }
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));