import React from "react";
import ReactDOM from "react-dom";
import  {add, sub, div ,multi} from "./calcu";


ReactDOM.render(

  <>
  <ul>
    <li><h1>Sum of two no is : {add(40,10)}</h1></li>
    <li><h1>Sub of two no is : {sub(40,5)}</h1></li>
    <li><h1>Div of two no is : {div(40,3)}</h1></li>
    <li><h1>Mult of two no is: {multi(40,5)}</h1></li>
    
  </ul>
  </>,document.getElementById('root')
)