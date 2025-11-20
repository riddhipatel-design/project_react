import UserClass from "./UserClass";
import User from "./User"
import UserContext from "../utils/UserContext";
import { Component } from "react";

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <h2>Hello World!!</h2>
        <UserClass name={"Riddhi"} location={"Cambridge"}/>
        <User name={"Riddhi"} location={"Cambridge"}/>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (<h1>{loggedInUser}</h1>)}
          </UserContext.Consumer>
        </div>
        </div>
       
  )
}

export default About;