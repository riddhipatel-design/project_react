import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    
    <h1 className="heading">Namaste</h1> )

 const elem = <span> React Element inside Component</span>   

const HeadingComponenet = () => (
    <div>
    <Title />
   <h1>Hello React</h1>
   {elem}
   </div>
   )

   // you can also put function Componenet inside React Element

   const Title2 = (
    <div>
    <h3>Component inside Element</h3>
    <HeadingComponenet />
    </div>
   )
//const heading = React.createElement("h1", {}, "Namaste")
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title2);