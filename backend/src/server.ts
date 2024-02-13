import express, { Application, NextFunction, Request, Response } from 'express';
import { UsersRoutes } from './routes/Users.routes';
import { ErrorMiddleware } from './middleware/Error.middleware';

const app: Application = express();
const usersRoutes = new UsersRoutes().getRoutes();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: any, request: Request, response: Response, next: NextFunction) => {
    ErrorMiddleware(err, request, response, next);
});

app.use('/users', usersRoutes);

app.listen(3004, () => console.log('Server is running'));
