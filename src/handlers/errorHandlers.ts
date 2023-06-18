import { Request, Response, NextFunction } from 'express';

/* 
  instead of adding try - catch(e) to all async - await functions 
  use catchErrors to wrap the function and catch the possible error
*/
export const catchErrors = (fn: Function) => {
    return function (req: Request, res: Response, next: NextFunction) {
        return fn(req, res, next).catch(next);
    };
};

// If any of the routes did not match -> 404
export const handleNotFound = (req: Request, res: Response, next: NextFunction) => {
    const err: any = new Error('Not Found');
    err.status = 404;
    next(err);
};


/*
  Detect if there are mongodb validation errors -> 400 bad request
*/

export const handleValidationErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!err.errors) return next(err);

    // mongoose schema validation errors
    res.status(400).json(err);
};


// development Errors handler, based on function from Wes Bos
export const handleDevelopmentErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status,
        stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    };
    res.status(err.status || 500);
    res.json(errorDetails);
};
