
import React, { useState } from "react";
import Duplicate from "./javascriptEasy/Duplicate";
import { fibonacci } from "./javascriptEasy/fibonacci";
import LargestNo from "./javascriptEasy/LargestNo";
import Palindrome from "./javascriptEasy/palindrome";
import ReverseString from "./javascriptEasy/reverseString";
import GetApi from "./javascriptEasy/api/getApi";
import PlayingPosts from "./javascriptEasy/api/PlayingPosts";
import BuzzFizz from "./javascriptEasy/BuzzFizz";
import DNDBeautiful from "./DNDPAckage/DNDBeautiful";
import Dropping from "./DNDPAckage/Dropping";

const App = () =>{

   

    // console.log(fibonacci(8))

    // console.log("hello")
    return (
        <div>
            <DNDBeautiful/>
            <Dropping/>
     
            {/* <Duplicate/>
            
            <BuzzFizz/>
           <Palindrome />
           <LargestNo/>
         */}
        {/* <PlayingPosts/> */}
         {/* <GetApi/> */}
        </div>
    )
}

export default App