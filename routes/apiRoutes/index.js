const router = require('express').Router();
const data = require('../../db/db.json');
const saveToDB = require('../../lib/notes');

router.get('/notes', (req,res)=>
{
    res.json(data);
});

router.post('/notes', (req,res)=>
{
    req.body.id = (parseInt(data[data.length-1].id)+1).toString() ;
    
    data.push(req.body);
    saveToDB(data);
    res.json(data);
});

router.delete('/notes/:id', (req,res)=>
{
    const index = data.findIndex(note => note.id == req.params.id );
    if(index === -1)
    {
        res.send('ID is not available')
    }
    else
    {
        data.splice(index,1);
        saveToDB(data);
        res.json(data);
    }
});

module.exports = router;