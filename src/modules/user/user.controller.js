import catchAsync from '../../errors/catchAsync.js';

const userTest = catchAsync((req, res) => {
    console.log('User test route reached!');
    res.status(200).json({ 
        message: 'User test successful'
    });
});

export {
    userTest
};