const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../service");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /sign up
 * req-body{ email: 'a@b.com', password: 1234, }
 */
async function signUp(req, res) {
  try {
    const user = await UserService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function signin(req, res) {
  try {
    const user = await UserService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function addRoleToUser(req, res) {
  try {
    const user = await UserService.addRoleToUsers({
      role: req.body.role,
      id: req.body.id,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  signUp,
  signin,
  addRoleToUser
};
