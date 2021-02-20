const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming JSON data
app.use(express.json());

app.use('/',htmlRoutes);
app.use('/api/', apiRoutes);

app.use(express.static('public'));

app.listen(PORT , () => 
{
    console.log(`API server now on port 3001!`);
});
