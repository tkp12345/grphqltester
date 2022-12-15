import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {FC} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React from 'react';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';
import Character from './pages/Character';

const  App:FC=()=> {
    const client = new ApolloClient ({
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    })
  return (
      <>
  <BrowserRouter>
  <ApolloProvider client={client}>
    <div className="App">
      <Switch>
        <Route strict exact path="/" component={CharactersList}/>
          <Route strict exact path="/search" component={Search}/>
          <Route strict exact path="/:id" component={Character}/>
      </Switch>
    </div>
</ApolloProvider>
</BrowserRouter>
          </>
  );
}

export default App;
