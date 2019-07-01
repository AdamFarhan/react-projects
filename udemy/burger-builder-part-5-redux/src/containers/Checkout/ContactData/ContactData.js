import React from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.css';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
class ContactData extends React.Component {
    state ={
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            street:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            zipCode:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                isValid: false,
                touched: false
            },
            country:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            deliveryType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                isValid: true
            },
        },
        formIsValid: false,
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for ( let formElementId in this.state.orderForm ) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        };
        console.log("formData", formData);
        //alert("Purchase Successful!");
        const order ={
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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
    
    checkValidity(value, rules) {
        let tempIsValid = true;

        if(rules.required) {
            tempIsValid = value.trim() !== '' && tempIsValid;
        }
        if(rules.minLength) {
            tempIsValid = value.length >= rules.minLength && tempIsValid;
        }
        if(rules.maxLength) {
            tempIsValid = value.length <= rules.maxLength && tempIsValid;
        }
        return tempIsValid;
    }

    inputChangedHandler = (e, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        updatedOrderForm[inputId].value = e.target.value;
        updatedOrderForm[inputId].isValid = this.checkValidity(updatedOrderForm[inputId].value, updatedOrderForm[inputId].validation);
        updatedOrderForm[inputId].touched = true;

        let formIsValid = true;
        for (let inputId in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputId].isValid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        };
        let form = (
        <form onSubmit={this.orderHandler}>
            {formElementsArray.map(i => (
                <Input 
                    key={i.id}
                    elementType={i.config.elementType} 
                    elementConfig={i.config.elementConfig}
                    value={i.config.elementConfig.value} 
                    changed={(e) => this.inputChangedHandler(e, i.id)} 
                    shouldValidate={i.config.validation}
                    isValid={i.config.isValid}
                    touched={i.config.touched} />
            ))}
            <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(withRouter(ContactData));