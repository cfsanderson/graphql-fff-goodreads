const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

const x = fetch(
  'https://www.goodreads.com/author/show.xml?id=4432&key=wzbLwLc2zCa3JbBK2xMA'
)
.then(response => response.text())
.then(parseXML)

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '...',

  fields: () => ({

  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt }
        }
      }
    })
  })
})

// stopped at
