import React from 'react';
// import Footer from './components/Footer.js';
// import Navbar from './components/Navbar.js';
// import UserForm from './components/UserForm';
import Pages from './pages/index.js';

import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

//
import Layout from './components/layout';

const uri = process.env.API_URI || 'http://localhost:4000/api';
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  return {
    ...headers,
    authorization: localStorage.getItem('token') || '',
  };
});

const client = new ApolloClient({
  uri,
  cache,
  resolvers: {},
  link: authLink.concat(httpLink),
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Pages />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
