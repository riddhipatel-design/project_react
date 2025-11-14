const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData?.info
  return (
   <div
  className="res-card w-72 h-[380px] bg-gray-100 rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
>
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

export default RestaurantCard;