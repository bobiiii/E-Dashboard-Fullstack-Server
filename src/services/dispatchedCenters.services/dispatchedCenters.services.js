const { DispatchedCentersModel } = require('../../models');

const getDispatchedCenters = async () => DispatchedCentersModel.find({});

const addDispatchedCenter = async ({
  center_name,
  location,
  courier_service,
}) => {
  const response = await DispatchedCentersModel.create({
    center_name,
    location,
    courier_service,
  });
  return response;
};

const getDispatchedCenterDetails = async ({
  dispatchedCenterId,
}) => {
  const response = await DispatchedCentersModel.findById(dispatchedCenterId);
  return response;
};

const updateDispatchedCenter = async ({
  dispatchedCenterId,
  center_name,
  location,
  courier_service,
}) => {
  const data = {

    center_name,
    location,
    courier_service,
  };
  const response = await DispatchedCentersModel.findByIdAndUpdate(dispatchedCenterId, data, { new: true });
  return response;
};

const deleteDispatchedCenter = async ({ dispatchedCenterId }) => {
  const response = await DispatchedCentersModel.findByIdAndDelete(dispatchedCenterId);
  return response;
};

module.exports = {
  getDispatchedCenters,
  getDispatchedCenterDetails,
  addDispatchedCenter,
  updateDispatchedCenter,
  deleteDispatchedCenter,
};
