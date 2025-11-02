const RestaurantCard = (props) => {
  const {resData} = props;
  const {image, name, cuisine, rating, deliveryTime} = resData
  return (
   <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={image}
        alt={name}
        width="200"
        height="150"
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {rating}</h4>
      <h4>⏱ {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;