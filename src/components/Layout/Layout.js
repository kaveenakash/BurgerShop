import React,{useState} from 'react'
import Auxi from '../../hoc/Auxi'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
const Layout = props =>{
    const [showSideDrawer,setShowSideDrawer] = useState(true);

    const sideDrawerClosedHandler = () =>{
        setShowSideDrawer(false);
    }

    return(
        <Auxi>
            <Toolbar/>  
            <SideDrawer open={showSideDrawer}closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxi>
    )
}

export default Layout;