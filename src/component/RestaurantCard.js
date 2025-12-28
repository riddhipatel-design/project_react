
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;
  
    return (
    <div 
    data-testid="resCard"
    className="res-card w-72 h-[380px] bg-gray-100 rounded-lg p-4 flex flex-col justify-between hover:bg-gray-200 shadow-lg transition-shadow duration-200">
      <div className="w-full h-50 overflow-hidden rounded-lg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h3 className="font-semibold py-1.5 ml-4 text-lg">{name}</h3>

      <h4 className="font-normal py-1 ml-4 text-md line-clamp-1">
        {cuisines.join(", ")}
      </h4>

      <h4 className="font-normal py-1 ml-4 text-md">⭐ {avgRating}</h4>

      <h4 className="font-normal py-1 ml-4 text-md">
        ⏱ {resData?.info?.sla.deliveryTime} mins
      </h4>
    </div>
  );
};


export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const discount = props.resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div className="relative">
        {/* ONLY render label if V3 exists */}
        {discount ? (
          <div className=" absolute 
            top-1 left-2 ml-1
            px-2 py-1 
            bg-gray-700 
            text-white 
            rounded-lg 
            text-sm font-bold 
            z-20
            ">
            {discount.header} {discount.subHeader}
          </div>
        ) : null}

        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
