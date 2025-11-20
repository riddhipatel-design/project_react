import { useState } from "react";
import "./MenuAccordion.css";

const MenuAccordion = ({ title, items, showItems, setOpenIndex }) => {
  console.log(title, items);
  const handelClick = () => { 
    setOpenIndex(); };

  return (
    <div className="accordion my-4 shadow-lg">
      <div className="accordion-header" onClick={handelClick}>
        <h2>
          {title} ({items.length})
        </h2>{" "}
        <span>{showItems ? "▲" : "▼"}</span>
      </div>
      {showItems && (
        <div className="accordion-content">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <div className="flex">
                <div className="w-9/12">
                  <span className="font-semibold text-md/5 mr-3">
                    {item.name}
                  </span>
                  <span className="font-semibold">₹{item.price}</span>
                  <p className="mt-2">{item.description}</p>
                </div>
                <div className="w-3/12">
                  <button className="px-2.5 py-1 bg-black text-white drop-shadow-lg m-auto rounded-md">
                    Add+
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
