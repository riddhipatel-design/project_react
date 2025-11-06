const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData?.info
  return (
   <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        alt={name}
        width="200"
        height="150"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>⏱ {resData?.info?.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;