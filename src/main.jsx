import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  HttpLink,
  from,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

const link = from([
  new HttpLink({
    uri: "https://gravitel-graphql-backend.herokuapp.com/graphql",
  }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);
