import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price:<strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          disabled={props.disabled[item.type]}
          removed={() => props.ingredientSubsract(item.type)}
          added={() => props.ingredientAdded(item.type)}
        />
      ))}
      <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
