import config from './config/config.js';
import globalErrorHandler from './errors/globalErrorHandler.js';
import userRouter from './modules/user/user.router.js';
import AppError from './errors/appError.js';
import { StatusCodes } from 'http-status-codes';
import morgan from 'morgan';
import chalk from 'chalk';

function createApp(express) {
    const app = express();

    // Run morgan on dev env
    if (config.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    // ✅ Test Route
    app.get('/api/v1/', (req, res) => res.send('Welcome To The Server 😍.'));

    // User Routes
    app.use('/api/v1/user/', userRouter);

    // ❗ 404 Handler
    app.use((req, res, next) => {
        next(new AppError(`Can't find ${req.originalUrl} on this server!`, StatusCodes.BAD_REQUEST));
    });
    // app.use((req, res) => {
    //     res.status(404).send('Route not found');
    // });
    // 🛠 Global Error Handler 

    // app.use((err, req, res) => {
    //     console.log(chalk.bgGreen(`here =========`), err);
    //     res.status(err.StatusCodes).send('hi');
    // }
    // );
    app.use(globalErrorHandler);

    return app;
}

export default createApp;



