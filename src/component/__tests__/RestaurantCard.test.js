import { render, screen } from "@testing-library/react";
import RestaurantCard, { withDiscountLabel } from "../RestaurantCard";
import Mock_Data from "../mocks_test/resCardMock.json"
import "@testing-library/jest-dom";



it("Should render ResaurentCard component with props Data", () => {

render(<RestaurantCard resData={Mock_Data}/>)

const name = screen.getByText("La Pino'z Pizza")

expect(name).toBeInTheDocument()
});

it("Should reneder RestaurentCard componenet with Discount Label", () => {

   const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);

  render(<RestaurantCardWithDiscount resData={Mock_Data} />);

const discountLabel = screen.getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === "div" &&
      content.includes(Mock_Data.info.aggregatedDiscountInfoV3.header)
    );
  });

  expect(discountLabel).toBeInTheDocument();
});