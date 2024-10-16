
import React from "react";
import BuzzFizz from "./BuzzFizz";
import Duplicate from "./javascriptEasy/Duplicate";
import { fibonacci } from "./javascriptEasy/fibonacci";
import LargestNo from "./javascriptEasy/LargestNo";
import Palindrome from "./javascriptEasy/palindrome";
import ReverseString from "./javascriptEasy/reverseString";

const App = () =>{

    console.log(fibonacci(8))

    // console.log("hello")
    return (
        <div>
            <Duplicate/>
            <BuzzFizz/>
           <Palindrome />
           <LargestNo/>
        
        </div>
    )
}

export default App