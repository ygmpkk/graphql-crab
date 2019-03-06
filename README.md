# Humanized way to use chains operation for Graphql

> Happy use Graphql without crab

## Usage

ES5

```javascript
const gql = require("gql-chain");
```

ES6

```javascript
import gql from "gql-chain";
```

Browser

```javascript
var gql = window.GraphqlChain;
```

### Query

```graphql
const query = gql`
query($user: User, $page: Int, $perPage: Int) {
  getUser(input: $user) {
    userId
    name
    age
  }
}
`

const payload = query.user({name: "Tim"}).page(1).perPage(10)
console.log(payload)
// output
// {
//     "query": `query($user: User, $page: Int, $perPage: Int) {
//       getUser(input: $user) {
//         userId
//         name
//         age
//       }
//     }`,
//     "variables": {
//       "user": {
//         "name": "Timothy",
//       },
//       "page": 1,
//       "perPage": 10,
//     },
// }
```

## License MIT
