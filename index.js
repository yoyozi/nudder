const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');

const app = express();

// Our routes go here
app.get('/endpoint-1', (req, res, next) => {
    res.status(200).json({
        success: true,

        data: {
            message:
        'Hi from EndPoint1'
    }
    })
});

app.get('/endpoint-2', (req, res, next) => {
    res.status(200).json({
        success: true,

        data: {
            message:
        'Hi from EndPoint2'
    }
    })
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is runnoing on this port ${PORT}`));

