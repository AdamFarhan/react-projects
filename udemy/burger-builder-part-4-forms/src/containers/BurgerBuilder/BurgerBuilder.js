import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7
}

class BurgerBuilder extends React.Component{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount() {
        axios.get("https://burger-builder-e64ae.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            });

    }

    updatePurchaseState = (tempIngredients) => {
        //const tempIngredients = {...this.state.ingredients};
        const sum = Object.keys(tempIngredients)
            .map(igKey => {
                return tempIngredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum>0})
    }

    addIngredient = (type) => {
        //update the ingredients
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        //update the price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredient = (type) => {
        //update the ingredients
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return false;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        //update the price
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseContinueHandler = () => {
        

        //build a query string formatted like
        //url/checkout?bacon=1&cheese=1&meat=1&salad=1
        const queryParams = [];
        for( let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '='
                             + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price='+ this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
        
    }
    closeModal = () => {
        this.setState({purchasing: false});
    }
    render(){
        console.log('[BurgerBuilder.js] render()');
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
        let orderSummary = null;
        if(this.state.ingredients){
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredient}
                        ingredientRemoved={this.removeIngredient}
                        disabled={disabledInfo}
                        price={this.state.totalPrice} 
                        purchaseable={this.state.purchaseable}
                        order={this.purchaseHandler}/>
                </React.Fragment>);
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);