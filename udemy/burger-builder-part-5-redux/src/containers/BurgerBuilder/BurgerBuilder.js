import React from 'react';
import { connect } from 'react-redux';


import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends React.Component{
    state = {
        purchasing: false,
        loading: false,
        error: false,
    }

    isPurchaseable = (tempIngredients) => {
        //const tempIngredients = {...this.state.ingredients};
        const sum = Object.keys(tempIngredients)
            .map(igKey => {
                return tempIngredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }
    closeModal = () => {
        this.setState({purchasing: false});
    }
    render(){
        console.log('[BurgerBuilder.js] render()');
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
        let orderSummary = null;
        if(this.props.ings){
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded={this.props.onAddIngredient}
                        ingredientRemoved={this.props.onRemoveIngredient}
                        disabled={disabledInfo}
                        price={this.props.totalPrice} 
                        purchaseable={this.isPurchaseable(this.props.ings)}
                        order={this.purchaseHandler}/>
                </React.Fragment>);
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ings}
                    price={this.props.totalPrice}
                    purchaseCancelled={this.closeModal}
                    purchaseContinued={this.purchaseContinueHandler} />);
        }

        if(this.state.loading){
            orderSummary = <Spinner />
        }
        

        return(
            <React.Fragment>
                <Modal show={this.state.purchasing} closeModal={this.closeModal}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (name) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: name}),
        onRemoveIngredient: (name) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: name})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));