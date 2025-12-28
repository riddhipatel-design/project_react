import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks_test/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Body component with Search", async () => {
    await act(async() => render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    )
);

const searchBtn = screen.getByRole("button", {name: "Search"});
const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, { target: {value: "burger" }})

fireEvent.click(searchBtn)

const cards = screen.getAllByTestId("resCard")

expect(cards.length).toBe(5);
   
});

it("Should filter Top rated Rest.", async () => {
    await act(async() => render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    )
);

const cardsBeforeFilter = screen.getAllByTestId("resCard");

expect(cardsBeforeFilter.length).toBe(20);

const topRatedBtn = screen.getByRole("button", {name: "Top Rated"});

fireEvent.click(topRatedBtn);

const cardsAfterFilter = screen.getAllByTestId("resCard")

expect(cardsAfterFilter.length).toBe(11)
   
});