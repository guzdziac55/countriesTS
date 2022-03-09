import React from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Countries } from "./components/Countries";
import { RoutesConfig } from "./routes/RoutesConfig";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <RoutesConfig> */}
      <div className="App">
        <Countries />
      </div>
      {/* </RoutesConfig> */}
    </ApolloProvider>
  );
}

export default App;
