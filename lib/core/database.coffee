mongo = require('mongoskin')

db = mongo.db("mongodb://gera.vn:27017/wingsNode", {native_parser:true})
console.log 'connection opened...'
Article = db.collection('articles')

Article.insert {
  name: "Guns N' Roses"
  members: ['Axl Rose', 'Slash', 'Izzy Stradlin', 'Matt Sorum', 'Duff McKagan']
  year: 1986
}, -> console.log 'inserted!'; db.close(); console.log 'connection closed...'

module.exports = db
