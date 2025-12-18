import { useState } from "react";
import "./MenuAccordion.css";

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
            <div className="item border-b border-[#e0e0e0] last:border-b-0" key={item.id}>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-9/12">
                  <span className="font-semibold text-md/5 mr-3">
                    {item.name}
                  </span>
                  <span className="font-semibold">₹{item.price}</span>
                  <p className="mt-2">{item.description}</p>
                </div>
               <div className="w-full sm:w-3/12 flex flex-col items-center gap-2">
     {/* IMAGE */}
    
      <img
        src={item.imageId}
        alt={item.name}
        className="w-28 h-26 object-cover rounded-lg"
      />
    {/* ADD BUTTON */}
    <button
       className="px-3 py-1 border border-black text-sm rounded-lg font-bold hover:bg-gray-200 cursor-pointer"
    >
      ADD
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
