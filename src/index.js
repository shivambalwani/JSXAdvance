import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

const rootElement = document.getElementById("root");
const fname = "Shivam";
const lname = "Balwani";
const year = new Date().getFullYear();
const img = "https://picsum.photos/200";

let type = new Date().getHours();
var greet = "Good Morning";
const customColor = {
  color: " "
};
if (type < 12) {
  greet = "Good Morning";
  customColor.color = "blue";
} else if (type > 12 && type <= 6) {
  greet = "Good Afternoon";
  customColor.color = "green";
} else {
  greet = "Good Evening";
  customColor.color = "red";
}
ReactDOM.render(
  <div>
    <h1 className="heading">Hello My name is {`${fname} ${lname}`}!</h1>
    <h1>Hello My name is {fname + " " + lname}!</h1>
    <h1 style={customColor}>{greet}</h1>
    <Heading />
    <ul>
      <li>Gaming</li>
      <li>Study</li>
      <li>Web Dev</li>
    </ul>
    <p>Copyright {year}</p>
    <img alt="random" src={img} />
    <img alt="random" src={img} />
    <img alt="random" src={img} />
  </div>,

  rootElement
);
