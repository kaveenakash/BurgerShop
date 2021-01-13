import React, { useState, useEffect } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing,setPurchasing] = useState(false);

  useEffect(() => {
    const ing = {
      ...ingredients,
    };
    const sum = Object.keys(ing)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return (sum = sum + el);
      }, 0);
    setPurchasable(sum <= 0);
  }, [ingredients]);

  const addIngredientHandler = (type) => {
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = ingredients[type] + 1;
    setIngredients(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice((prev) => {
      return prev + priceAddition;
    });
  };
  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) {
      return;
    }
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = ingredients[type] - 1;
    setIngredients(updatedIngredients);

    const priceSubstraction = INGREDIENT_PRICES[type];
    setTotalPrice((prev) => {
      return prev - priceSubstraction;
    });
  };
  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const purchaseHandler = () =>{
    setPurchasing(true);
  }
  const purchaseCancelHandler = () =>{
    setPurchasing(false)
  }
  const purchaseContinueHandler = () =>{
    alert('You continue')
  }

  return (
    <Auxi>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary ingredients={ingredients} purchaseCancel={purchaseCancelHandler} purchaseContinue={purchaseContinueHandler} />
      </Modal>

      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientSubsract={removeIngredientHandler}
        disabled={disabledInfo}
        price={totalPrice}
        ordered={purchaseHandler}
        purchasable={purchasable}
      />
    </Auxi>
  );
};

export default BurgerBuilder;
