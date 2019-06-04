import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(item => {
            return <BuildControl 
                label={item.label}
                key={item.label}
                added={() => props.ingredientAdded(item.type)}
                removed={() => props.ingredientRemoved(item.type)}
                disabled={props.disabled[item.type]}/>
        })}
    </div>
);

export default buildControls;