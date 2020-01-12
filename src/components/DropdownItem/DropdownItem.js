import React, {useState, useRef, useEffect} from "react";

import {Manager, Reference} from "react-popper";
import DropdownMenu from '../DropdownMenu/DropdownMenu'

import {FaAngleUp, FaAngleDown, FaAddressCard} from "react-icons/fa";

import "./DropdownItem.styles.scss";

const DropdownItem = () => {
    const node = useRef();

    const [open, setOpen] = useState(false);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const toggleHandler = () => {
        setOpen(!open);
    };

    return (
        <div ref={node}>
            <Manager>
                <Reference>
                    {({ref}) => (
                        <div className="menu-wrapper">
                            <div className="menu-item" ref={ref}>
                                <div className="icons"><FaAddressCard/></div>
                                <h2>Dashboard</h2>
                                <div className="icons toggle-icon" onClick={toggleHandler}>
                                    {open === true ?
                                        <FaAngleUp style={{color: '#14a3f9'}}/>
                                        :
                                        <FaAngleDown/>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </Reference>
                {open === true ? (
                    <DropdownMenu/>
                ) : null}
            </Manager>
        </div>

    );
};

export default DropdownItem;
