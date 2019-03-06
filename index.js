function chain(gql) {
  gql = Array.isArray(gql) ? gql.join('').trim() : gql
  const payload = {
    query: gql
  }

  // Ignore whitespace
  const [, , argument] = gql.replace(/\s/g, '').match(/(query|mutation)(\(.*?\))?\{/)

  let obj = {
    variables: function (variables) {
      payload.variables = variables
      return this
    },
    toJSON: function () {
      return payload
    },
  }

  if (argument) {
    const re = /(\$\w+)/g
    const keys = argument.match(re)
    
    keys.forEach(key => {
      key = key.replace(/^\$/, '')
      obj[key] = function (variables) {
        if (!payload.variables) payload.variables = {}
        payload.variables[key] = variables
        return this
      }
    })
  }

  return obj
}


module.exports = chain