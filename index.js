const express = require('express');
const urlRouter = require('./router/url');
const URL = require('./models/url');
const connectToMongodb = require('./connect');

const app = express();
const PORT = 8001;

app.use(express.json());
app.use('/url', urlRouter);

app.get('/:shortId', async (req, res) =>{
    const shortId = req.params.shortId;
    const entry =  await URL.findOneAndUpdate(
        {
        shortId
        },
        {
            $push: {
                visitHistory:{
                    timeStamp: Date.now(),
                },
            },
        }
    )

    res.redirect(entry.redirectUrl)
});

connectToMongodb('mongodb+srv://<Your UserName>:<Your Password>@cluster0.6smf1n8.mongodb.net/short-url?retryWrites=true&w=majority');

app.listen(PORT, () => console.log(`Your server is running on Port: ${PORT}`));
