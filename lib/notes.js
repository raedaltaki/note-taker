const fs = require("fs");
const path = require("path");

function saveToDB(notesArray) 
{
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

}

module.exports = saveToDB;