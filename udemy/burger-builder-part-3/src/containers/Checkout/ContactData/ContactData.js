import React from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import {withRouter} from 'react-router-dom';
class ContactData extends React.Component {
    state ={
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        },
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        //alert("Purchase Successful!");
        const order ={
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Adam Farhan',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '12345',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryType: 'fast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error)
            });
    }

    render() {
        let form = (<form>
            <input className={classes.Input}  type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input}  type="text" name="email" placeholder="Your Email" />
            <input className={classes.Input}  type="text" name="street" placeholder="Street" />
            <input className={classes.Input}  type="text" name="zipcode" placeholder="Zip Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact information</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);