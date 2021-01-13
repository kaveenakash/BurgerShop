import React from "react";
import Auxi from "../../../hoc/Auxi";
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey} </span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxi>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price:{props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Auxi>
  );
};

export default OrderSummary;
