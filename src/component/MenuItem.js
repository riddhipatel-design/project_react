import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItem = ({ item, showQuantityControls, showAddButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item)); // Redux handles quantity
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="item border-b border-[#e0e0e0] last:border-b-0 py-2">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        
        {/* Text info */}
        <div className="w-full sm:w-9/12">
          <span className="font-semibold text-md mr-3">{item.name}</span>
          <span className="font-semibold">₹{item.price}</span>
          {item.description && <p className="mt-2">{item.description}</p>}
        </div>

        {/* Image + Controls */}
        <div className="w-full sm:w-3/12 flex flex-col items-center gap-2">
          {item.imageId && (
            <img
              src={item.imageId}
              alt={item.name}
              className="w-28 h-26 object-cover rounded-lg"
            />
          )}

          {/* Quantity Controls (Cart View) */}
          {showQuantityControls && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleRemoveItem}
                className="px-2 bg-gray-300 rounded font-bold"
              >
                −
              </button>

              <span className="font-semibold">{item.quantity}</span>

              <button
                onClick={handleAddItem}
                className="px-2 bg-gray-300 rounded font-bold"
              >
                +
              </button>
            </div>
          )}

          {/* Add Button (Menu View) */}
          {showAddButton && (
            <button
              className="px-3 py-1 border border-black text-sm rounded-md font-bold hover:bg-gray-200 cursor-pointer"
              onClick={handleAddItem}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
