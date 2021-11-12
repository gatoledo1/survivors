import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

let apolloClient: any

const httpLink = new HttpLink({ 
  uri: "https://graphql-api-survivors.herokuapp.com",
});

function createApolloClient() {
  try {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: httpLink,
      cache: new InMemoryCache(),
    })
  } catch (error) {
    console.log('createApolloClient error', error)
  }
}

export function initializeApollo(initialState = null) {
  try {
    const _apolloClient = apolloClient ?? createApolloClient()
  
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
      _apolloClient.cache.restore(initialState)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient
  
    return _apolloClient
  } catch (error) {
    console.log('initializeApollo error', error)
  }
}

export function useApollo(initialState: null | undefined) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
