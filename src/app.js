
import React, { useState } from "react";
import BuzzFizz from "./BuzzFizz";
import Duplicate from "./javascriptEasy/Duplicate";
import { fibonacci } from "./javascriptEasy/fibonacci";
import LargestNo from "./javascriptEasy/LargestNo";
import Palindrome from "./javascriptEasy/palindrome";
import ReverseString from "./javascriptEasy/reverseString";
import GetApi from "./javascriptEasy/api/getApi";
import PlayingPosts from "./javascriptEasy/api/PlayingPosts";

const App = () =>{

   

    console.log(fibonacci(8))

    // console.log("hello")
    return (
        <div>
            {/* <Duplicate/>
            <BuzzFizz/>
           <Palindrome />
           <LargestNo/>
         */}
        <PlayingPosts/>
         {/* <GetApi/> */}
        </div>
    )
}

export default App