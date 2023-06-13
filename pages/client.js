import {ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';

const link = new HttpLink({ uri: `${API_URL}/graphql`})
const cache = new InMemoryCache()
const client = new ApolloClient({link,cache});

export default client