const gql = require('./')

test('with argument', () => {
  const query = gql`
    query($user: User, $page: Int, $perPage: Int) {
      getUser(input: $user) {
        userId
        name
        age
      }
    }
  `

  const ret = query.user({
    name: "Timothy"
  }).page(1).perPage(10).toJSON()

  expect(ret).toEqual({
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
  })
})

// test('not with argument', () => {
//   const query = gql`
//     {
//       getUser {
//         userId
//         userName
//         age
//       }
//     }
//   `

//   expect(query).toBe({ query: ''})
// })