const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const { UserRepository } = require("../repositories");
const db = require("../models");
const AppError = require("../utils/errors/app-error");

const userRepo = new UserRepository();

async function createUser(data) {
  try {
    const user = await userRepo.create(data);
    return user;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new User object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createUser,
};
