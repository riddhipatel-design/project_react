import { useState } from "react";
import "./MenuAccordion.css";
import MenuItem from "./MenuItem";


const MenuAccordion = ({ title, items, showItems, setOpenIndex }) => {
  console.log(title, items);
  const handelClick = () => {
    setOpenIndex();
  };


  return (
    <div className="border border-gray-200 mb-2.5 rounded-xl">
      <div
  className={`accordion-header rounded-xl ${
    showItems ? "accordion-active" : ""
  }`}
  onClick={handelClick}
  role="button"
  tabIndex={0}
  aria-expanded={showItems}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handelClick();
    }
  }}
>

        <h2 className="font-semibold text-base">
          {title} ({items.length})
        </h2>{" "}
        <span>{showItems ? "▲" : "▼"}</span>
      </div>
    {showItems && (
        <div className="accordion-content">
          {items.map((item) => (
            <MenuItem data-testid="foodItems" key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
