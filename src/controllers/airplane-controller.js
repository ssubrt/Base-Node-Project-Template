const { AirplaneService } = require("../services");

const StatusCodes = require("http-status-codes").StatusCodes;

/*
post: /airplane
req.body 



*/

async function createAirplane(req, res) {
  console.log(req.body);
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Succesfully create an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error",
      data: {},
      error: error,
    });
  }
}

module.exports = {
     createAirplane 
};
