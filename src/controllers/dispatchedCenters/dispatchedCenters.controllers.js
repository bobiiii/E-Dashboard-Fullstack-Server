const {
  DispatchedCentersServices,
} = require('../../services');

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

const getDispatchedCenterDetails = async (req, res) => {
  try {
    const { dispatchedCenterId } = req.params;
    const dispatchedCenter = await DispatchedCentersServices.getDispatchedCenterDetails({ dispatchedCenterId });
    if (!dispatchedCenter || dispatchedCenter.length === 0) {
      return res.status(404).send('No dispatched Center found for the provided ID.');
    }
    return res.send({ data: dispatchedCenter });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const addDispatchedCenter = async (req, res) => {
  try {
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
      return res.send({ message: 'Adding dispatched Center failed' });
    }

    return res.send({ data: addeDispatchedCenter });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error occured' });
  }
};

const updateDispatchedCenter = async (req, res) => {
  try {
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
      return res.send({ message: 'Unable to update dispatched Center' });
    }
    return res.send({ data: updatedDispatchedCenter });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error Occured' });
  }
};

const deleteDispatchedCenter = async (req, res) => {
  try {
    const { dispatchedCenterId } = req.params;
    const deletedRemainingCenter = await DispatchedCentersServices.deleteDispatchedCenter({ dispatchedCenterId });
    if (!deletedRemainingCenter) {
      return res.send({ message: 'Unable to delete dispatched Center' });
    }
    return res.send({ data: deletedRemainingCenter });
  } catch (error) {
    return res.send({ message: 'An error Occured' });
  }
};

//

module.exports = {
  getDispatchedCenters,
  getDispatchedCenterDetails,
  addDispatchedCenter,
  updateDispatchedCenter,
  deleteDispatchedCenter,
};
