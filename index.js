const fs = require('fs-extra');
let pathTemp = 'temp/';
let pathPubs = 'temp/pubs.json';

//Si le dossier temp existe on le supprime
async function doThings(){
    try{
        let exists = await fs.pathExists(pathTemp);
        if(exists){
            await fs.remove(pathTemp);
            console.log(pathTemp, ' removed');
        }
        await fs.ensureDir(pathTemp);
        let json = await fs.readJSON('./pubsData.json');
        await fs.writeJson(pathPubs, json);
        fs.watchFile(pathPubs, (curr, prev) => {
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        })
    }
    catch(error){
        console.log(error);
    }

}

doThings();











