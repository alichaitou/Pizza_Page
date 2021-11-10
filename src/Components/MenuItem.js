import React from 'react'

function MenuItem({menuitem}) {
    return (
        <div className="menuItem">
            <div style={{backgroundImage: `url(${menuitem.image})`}}></div>
            <h1>{menuitem.name}</h1>
            <p>${menuitem.price}</p>
        </div>
    )
}

export default MenuItem


