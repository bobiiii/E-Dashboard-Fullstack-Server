const {
  DispatchedCentersServices,
} = require('../../services');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getDispatchedCenters = async (req, res) => {
  try {
    console.log('dispatch cntrlr');
    const dispatchedCenters = await DispatchedCentersServices.getDispatchedCenters();
    if (!dispatchedCenters || dispatchedCenters.length === 0) {
      return res.status(404).send('No dispatched Center found.');
    }
    return res.send({ data: dispatchedCenters });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const getDispatchedCenterDetails = asyncHandler(async (req, res, next) => {
  const { dispatchedCenterId } = req.params;
  const dispatchedCenter = await DispatchedCentersServices.getDispatchedCenterDetails({ dispatchedCenterId });
  if (!dispatchedCenter || dispatchedCenter.length === 0) {
    next(new ErrorHandler('No dispatched centers found', 404));
  }
  return res.status(200).json({ data: dispatchedCenter });
});

const addDispatchedCenter = asyncHandler(async (req, res, next) => {
  const {
    center_name,
    location,
    courier_service,

  } = req.body;

  const addeDispatchedCenter = await DispatchedCentersServices.addDispatchedCenter({
    center_name,
    location,
    courier_service,
  });
  if (!addeDispatchedCenter) {
    next(new ErrorHandler('Unable to add Dispatched center', 500));
  }

  return res.status(200).json({ data: addeDispatchedCenter });
});

const updateDispatchedCenter = asyncHandler(async (req, res, next) => {
  const {
    center_name,
    location,
    courier_service,

  } = req.body;
  const { dispatchedCenterId } = req.params;
  const updatedDispatchedCenter = await DispatchedCentersServices.updateDispatchedCenter({
    dispatchedCenterId,
    center_name,
    location,
    courier_service,
  });
  if (!updatedDispatchedCenter) {
    next(new ErrorHandler('Unable to update Dispatched center', 500));
  }
  return res.status(200).json({ data: updatedDispatchedCenter });
});

const deleteDispatchedCenter = asyncHandler(async (req, res, next) => {
  const { dispatchedCenterId } = req.params;
  const deletedRemainingCenter = await DispatchedCentersServices.deleteDispatchedCenter({ dispatchedCenterId });
  if (!deletedRemainingCenter) {
    next(new ErrorHandler('Unable to delete Dispatched center', 500));
  }
  return res.status(200).send('deleted successfully');
});

module.exports = {
  getDispatchedCenters,
  getDispatchedCenterDetails,
  addDispatchedCenter,
  updateDispatchedCenter,
  deleteDispatchedCenter,
};
