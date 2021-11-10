import React from 'react'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../Components/MenuItem'
import '../Styles/Menu.css'
function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle"> Our Menu</h1>
            <div className="menuList"> 
            {MenuList.map((menuitem)=>{

            
            return MenuItem( menuitem={menuitem});
            
            })}

            </div>
        </div>

    )
}

export default Menu
