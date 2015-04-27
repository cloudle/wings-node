mongo = require('mongoskin')
db    = mongo.db("mongodb://gera.vn:27017/wingsNode", {native_parser:true})

module.exports = db