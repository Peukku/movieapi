// Import required modules
import express from 'express';
import router from '@/routers/routes';
import { handleNotFound, handleValidationErrors, handleDevelopmentErrors } from '@/handlers/errorHandlers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(handleNotFound); // When no route matches, set 404 Not Found
app.use(handleValidationErrors); // mongo validation error -> 400 Bad Request
app.use(handleDevelopmentErrors); // verbose error messages (500 if nothing else set)

export default app;