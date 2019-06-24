import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends React.Component {
    state ={
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const tempOrders = [];
                for(let key in response.data){
                    tempOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({loading:false, orders: tempOrders})
            })
            .catch(errors => {
                this.setState({loading:false})
            });
    }
    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);