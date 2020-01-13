import React from "react";
import menuItemsList from "../../constants/menuItemsList";
import {Popper} from "react-popper";

import './DropdownMenu.styles.scss'

const DropdownMenu = () => {
    return (
        <Popper placement="bottom">
            {({ref, style, placement, arrowProps}) => (
                <div className="dropdown-menu" ref={ref} style={style} data-placement={placement}>
                    <div className="dropdown-items">
                        <ul>
                            {
                                menuItemsList.map((item, index) => {
                                    return (
                                        <li  key={index}>
                                            <span>{item.icon}</span>
                                            {item.title}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div ref={arrowProps.ref} style={arrowProps.style}/>
                </div>
            )}
        </Popper>
    )
}

export default DropdownMenu