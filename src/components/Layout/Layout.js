import React from 'react'

const layout = props =>{
    return(
        <div>
            <div>Toolbar,Sidedrawer,Backdrop</div>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default layout;