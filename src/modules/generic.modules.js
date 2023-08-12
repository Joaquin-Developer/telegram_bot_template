const dbController = require("./db")
const { MongoDBInsertError } = require("../exceptions/exceptions")
const config = require("../../config")
const utils = require("../utils/utils")

const functions = {}


functions.help = () => {
    return utils.readHelpTemplate()
}


module.exports = functions