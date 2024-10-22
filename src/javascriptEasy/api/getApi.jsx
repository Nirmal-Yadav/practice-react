// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function GetApi() {
//   const [data, setData] = useState();
//   const [allData, setAllData] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   //   const handleChange = (e) => {
//   //     console.log("e", e);
//   //     // console.log("1", 1);
//   //     // setInputValue(value);
//   //     const filterData = allData.filter((pic, i) => {
//   //       return (
//   //         pic.title.toLowerCase().includes(e.target.value) ||
//   //         pic.id === Number(e.target.value)
//   //       );
//   //     });

//   //     setData(filterData);
//   //   };

//   const handleChange = (value) => {
//     console.log("Filtering with:", value);

//     const filterData = allData.filter((pic) => {
//       return (
//         pic.title.toLowerCase().includes(value.toLowerCase()) ||
//         pic.id === Number(value)
//       );
//     });
//     setData(filterData);
//   };
//   const debounce = (func, delay) => {
//     let timeoutId;

//     return (value) => {
//       if (timeoutId) {
//         clearTimeout(timeoutId); // Clear previous timeout
//       }

//       // Set a new timeout
//       timeoutId = setTimeout(() => {
//         func(value); // Call the function with the arguments
//       }, delay);
//     };
//   };

//   const handleDebounceValue = debounce(handleChange, 3000);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => {
//         setData(res.data);
//         setAllData(res.data);
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <label htmlFor="search"> Search</label>
//         <input
//           type="text"
//           name="search"
//           onChange={(e) => {
//             const value = e.target.value; // Get the input value
//             setInputValue(value); // Update input value immediately
//             handleDebounceValue(value); // Call the debounced function with the input value
//           }}
//           value={inputValue}
//         />
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           //   border: "2px solid black",
//           justifyContent: "space-around",
//           gap: "20px",
//           paddingTop: "5%",
//         }}
//       >
//         {data?.map((pic, i) => {
//           return (
//             <span
//               style={{
//                 display: "flex",
//                 flexDirection: "column",

//                 width: "200px",
//                 alignItems: "center",
//                 boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
//               }}
//               key={i}
//             >
//               <div>ID : {pic.id}</div>
//               <div>TITLE: {pic.title}</div>
//               <div>
//                 <img src={pic.thumbnailUrl} alt={pic.title} />
//               </div>
//               <div>
//                 <a href={pic.url} target="_blank" rel="noreferrer">
//                   View Image
//                 </a>
//               </div>
//             </span>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default GetApi;

import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

function GetApi() {
  const [data, setData] = useState([]); // State for filtered data
  const [allData, setAllData] = useState([]); // State for all data
  const [inputValue, setInputValue] = useState(""); // State for input value

  // Handle filtering based on input value
  const handleChange = useCallback(
    (value) => {
      console.log("Filtering with:", value); // Log the current input value for debugging

      const filterData = allData.filter((pic) => {
        return (
          pic.title.toLowerCase().includes(value.toLowerCase()) ||
          pic.id === Number(value)
        );
      });

      setData(filterData); // Set the filtered data
    },
    [allData]
  );

  // Debounce function to limit the rate of function execution
  const debounce = (func, delay) => {
    let timeoutId; // Variable to hold the timeout ID

    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear previous timeout if it exists
      }
      // Set a new timeout
      timeoutId = setTimeout(() => {
        func(...args); // Call the function with the arguments after delay
      }, delay);
    };
  };

  const handleDebounceValue = useCallback(debounce(handleChange, 1000), []); // Debounce with 1-second delay

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data);
        setAllData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  console.log("filterData", data);

  return (
    <>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          onChange={(e) => {
            const value = e.target.value; // Get the input value
            setInputValue(value); // Update input value immediately
            handleDebounceValue(value); // Call the debounced function with the input value
          }}
          value={inputValue}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "20px",
          paddingTop: "5%",
        }}
      >
        {data.map((pic, i) => (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              alignItems: "center",
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
            }}
            key={i}
          >
            <div>ID: {pic.id}</div>
            <div>TITLE: {pic.title}</div>
            <div>
              <img src={pic.thumbnailUrl} alt={pic.title} />
            </div>
            <div>
              <a href={pic.url} target="_blank" rel="noreferrer">
                View Image
              </a>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default GetApi;
