/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'Fail' : 'Error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Different Error Handlers in Production
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new ErrorHandler(message, 400);
};

// Handle Duplicate field Error
const handleDuplicateFieldsDB = (err) => {
  const message = `Duplicate field '${Object.keys(
    err.keyValue,
  )}'. Please use another value!`;
  return new ErrorHandler(message, 400);
};

// Handler for validation
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new ErrorHandler(message, 400);
};

// Handle Jwt error
const handleJWTError = () => new ErrorHandler('Invalid token. Please log in again!', 401);

// Handle JWT expiry Error
const handleJWTExpiredError = () => new ErrorHandler('Your token has expired! Please log in again.', 401);

// Send detailed errors in Development
const sendErrorDev = (err, req, res) => {
  // A) API

  if (req.originalUrl.startsWith('/')) {
    return res.status(err.statusCode).json({
      status: err.status,
      name: err.name,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  console.error('ERROR 💥', err);
};

// Send simple errors in production
const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith('/')) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    console.error('ERROR 💥', err);
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message,
    });
  }
  console.error('ERROR 💥', err);
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    let error = { ...err };
    error.message = err.message;
    if (err.name === 'CastError') error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (err.name === 'JsonWebTokenError') error = handleJWTError();
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();
    sendErrorProd(error, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorDev(err, req, res);
  }
};

module.exports = { ErrorHandler, globalErrorHandler };

// status code

// not found 404

// 401 Unauthorized - The client hasn’t authorized itself to the backend yet and
// the server may give it access after that has happened.
// 403 Forbidden - The client has authorized or doesn’t need to authorize itself,
//  but still has no permissions to access the resource

//  200 OK - Some people think a delete function of any kind should return the deleted element,
//   so a representation of the deleted element can be included in the response body.
// 204 No Content - The most fitting status code for this case. It’s better to
//  reduce traffic and simply tell the client the deletion is complete
//  and return no response body (as the resource has been deleted).

// Unable to Add Product (500)
// Unable to Add Product (500)
// Please Fill Valid Data (400)
