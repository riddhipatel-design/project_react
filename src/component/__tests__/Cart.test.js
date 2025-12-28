import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import MOCK_DATA from "../../utils/mockMenu"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
})

it("Should load Reastaurent Menu component", async () => {

    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
            <Header />
                <RestaurantMenu />
                </Provider>
                </BrowserRouter>
                ));

const accordionHeader = screen.getByText("Desserts")
fireEvent.click(accordionHeader);

expect(screen.getAllByTestId("foodItems").length.toBe(4))

//const addBtns = screen.getAllByRole("button", {name: "Add"})
//fireEvent.click(addBtns[0]);

//expect(screen.getByText("Cart - 1").toBeinTheDocument());
})