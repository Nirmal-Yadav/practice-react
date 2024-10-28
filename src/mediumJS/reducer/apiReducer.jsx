import React, { createContext, useReducer } from "react";

function apiReducer() {
  const state = {
    loading: true,
    error: "",
    data: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "success":
        return (state.loading = false), (state.error = ""), (state.data = data);
      case "failure":
        return {
          loading: false,
          error: "fetching error",
          data: {},
        };
    }
  };

  const [apiState, dispatch] = useReducer(reducer, state);

  const ApiContext = createContext();
  return;
  <ApiContext.Provider value={{ apiState, dispatch }}>
    <div></div>
  </ApiContext.Provider>;
}

export default apiReducer;
