import React from 'react'
import Auxi from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger'

const burgerBuilder = props =>{
    return(
        <Auxi>
            <Burger/>
            <div>Build Controls</div>
        </Auxi>
    )
}

export default burgerBuilder;