import React from "react";
import menuItemsList from "../../constants/menuItemsList";

import { FaAngleRight } from "react-icons/fa";

import "./MenuItems.styles.scss";

const MenuItems = () => {
  return (
    <div className="content">
      <div className="menu-wrapper">
        {menuItemsList.map((item, index) => {
          return (
            <div className="menu-item" key={index}>
              <div>{item.icon}</div>
              <h2>{item.title}</h2>
              <div>
                <FaAngleRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
