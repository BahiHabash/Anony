import config from './config/config.js';
import connectDB from './db/connect.js';
import createApp from './app.js';
import express from 'express';
import chalk from 'chalk';



let server = null;

// Handle critical errors before anything else
process.on('uncaughtException', (err) => {
    console.error('💥 Uncaught Exception:', err.name, err.message);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('💥 Unhandled Rejection:', err.name, err.message);
    if (server) {
        server.close(() => process.exit(1));
    } else {
        process.exit(1);
    }
});


async function startServer() {
    try { 
        await connectDB();
        const app = createApp(express);
        
        server = app.listen(config.PORT, () => {
            console.log(chalk.green.bold(`✅ Server running at http://localhost:${config.PORT}`));
        });
        
    } catch(err) {
        console.error(chalk.bgRed('❌ Startup Error:'), err);
        process.exit(1);
    }
}

export default startServer;
