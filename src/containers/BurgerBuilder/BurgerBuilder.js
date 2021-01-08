import React, { useState } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  return (
    <Auxi>
      <Burger ingredients={ingredients} />
      <BuildControls/>
    </Auxi>
  );
};

export default BurgerBuilder;
