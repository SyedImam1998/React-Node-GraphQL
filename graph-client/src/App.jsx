import { useState } from "react";

import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetQuery from "./Components/GetQuery";
import InsertQuery from "./Components/InsertQuery";


const errorLink= onError(({graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert(`Graphql erro ${message}`)
    })
  }
})
const link= from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/graphql'})
])

const client= new ApolloClient({
  cache: new InMemoryCache(),
  link:link,
})

function App() {
  const [count, setCount] = useState(0);

  return <ApolloProvider client={client}>
    <InsertQuery></InsertQuery>
    <GetQuery></GetQuery>
  </ApolloProvider>;
}

export default App;
