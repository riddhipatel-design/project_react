import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
     render(
        <BrowserRouter>
     <Provider store={appStore}>
   <Header/>
</Provider>
</BrowserRouter>
);

const loginbutton = screen.getByRole("button", { name: "Login" });
//const loginbutton = screen.getByText("Login")

expect(loginbutton).toBeInTheDocument();

});

it("Should change Login Button to Logout on click", () => {
     render(
        <BrowserRouter>
     <Provider store={appStore}>
   <Header/>
</Provider>
</BrowserRouter>
);

const loginbutton = screen.getByRole("button", { name: "Login" });

fireEvent.click(loginbutton);

const logoutbutton = screen.getByRole("button", { name: "Logout"});

expect(logoutbutton).toBeInTheDocument();

});
