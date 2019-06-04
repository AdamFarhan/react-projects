import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    let tempIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    console.log(tempIngredients);
    if(tempIngredients.length === 0){
        tempIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {tempIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;