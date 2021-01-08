import React,{useState} from 'react'
import Auxi from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = props =>{
    const [ingredients,setIngredients] = useState({salad:1,bacon:1,cheese:2,meat:2})

    return(
        <Auxi>
            <Burger ingredients={ingredients}/>
            <div>Build Controls</div>
        </Auxi>
    )
}

export default BurgerBuilder;