import _ from "lodash";
import addonMe from "./addon";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = addonMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
