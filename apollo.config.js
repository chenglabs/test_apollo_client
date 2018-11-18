module.exports = {
  client: {
    includes: [__dirname+'/src/queries/**'],
    service: {
      name: "pokemon",
      url: "https://graphql-pokemon.now.sh",
    }
  }
}