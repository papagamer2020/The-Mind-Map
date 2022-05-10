import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import createUser from './pages/signup';
import Login from './pages/login'
import Signup from './pages/signup';

function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </StoreProvider>
          </div>
        </Router>
      </ApolloProvider>
    );
}

export default App;