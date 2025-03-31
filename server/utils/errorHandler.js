// Error type factory function
const createError = (name, statusCode, defaultMessage) => {
    return (message = defaultMessage) => {
      const error = new Error(message);
      error.name = name;
      error.statusCode = statusCode;
      return error;
    };
  };
  
  // Specific error creators
  export const badRequest = createError('BadRequestError', 400, 'Bad Request');
  export const unauthorized = createError('UnauthorizedError', 401, 'Unauthorized');
  export const forbidden = createError('ForbiddenError', 403, 'Forbidden');
  export const notFound = createError('NotFoundError', 404, 'Not Found');
  export const conflict = createError('ConflictError', 409, 'Conflict');
  
  // Central error handler middleware
  export const errorHandler = (err, req, res, next) => {
    // Logging (modern console output with emoji)
    console.error(`🚨 [${err.name}]`, {
      message: err.message,
      statusCode: err.statusCode || 500,
      path: req.path,
      timestamp: new Date().toISOString(),
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  
    // Response formatting
    const response = {
      success: false,
      error: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    };
  
    // Special case handling
    if (err.name === 'ValidationError') {
      response.error = 'Validation Failed';
      response.details = Object.values(err.errors).map(e => e.message);
      return res.status(400).json(response);
    }
  
    if (err.code === 11000) {
      response.error = 'Duplicate Key Error';
      response.field = Object.keys(err.keyValue)[0];
      return res.status(409).json(response);
    }
  
    // Default error response
    res.status(err.statusCode || 500).json(response);
  };