import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
    uri:'http://localhost:3000/api'
})

ReactDOM.render(
  <Context.Provider value={{isAuth: false}}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
, document.getElementById('app'))
