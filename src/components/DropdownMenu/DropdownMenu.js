import React from "react";
import menuItemsList from "../../constants/menuItemsList";
import {Popper} from "react-popper";

import './DropdownMenu.styles.scss'

const DropdownMenu = () => {
    return (
        <Popper placement="bottom">
            {({ref, style, placement, arrowProps}) => (
                <div className="dropdown-menu" ref={ref} style={style} data-placement={placement}>
                    {
                        menuItemsList.map((item, index) => {
                            return (
                                <div className="dropdown-items" key={index}>
                                    <ul>
                                        <li>
                                            <span>{item.icon}</span>
                                            {item.title}
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <div ref={arrowProps.ref} style={arrowProps.style}/>
                </div>
            )}
        </Popper>
    )
}

export default DropdownMenu