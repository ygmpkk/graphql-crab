# Humanized way to use chains operation for Graphql

> Happy use Graphql without crab

## Usage

ES5

```javascript
const gql = require("graphql-crab");
```

ES6

```javascript
import gql from "graphql-crab";
```

Browser

```javascript
var gql = GraphqlCrab;
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

const payload = query.user({name: "Tim"}).page(1).perPage(10).toJSON()
```

payload

```
{
    "query": `query($user: User, $page: Int, $perPage: Int) {
      getUser(input: $user) {
        userId
        name
        age
      }
    }`,
    "variables": {
      "user": {
        "name": "Timothy",
      },
      "page": 1,
      "perPage": 10,
    },
}
```

## License MIT
