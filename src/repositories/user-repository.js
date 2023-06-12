const CrudRepository = require("./crud-repository");
const { User } = require("../models");

class userRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

module.exports = userRepository; 
