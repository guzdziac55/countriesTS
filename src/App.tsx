import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RoutesConfig } from "./routes/RoutesConfig";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <RoutesConfig></RoutesConfig>
    </ApolloProvider>
  );
}

export default App;
