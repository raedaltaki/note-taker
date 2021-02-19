const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/',htmlRoutes);


app.listen(PORT , () => 
{
    console.log(`API server now on port 3001!`);
});
