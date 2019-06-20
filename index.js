const fs = require('fs-extra');
let pathTemp = 'temp/';
let pathPubs = 'temp/pubs.json';

//Si le dossier temp existe on le supprime
fs.pathExists(pathTemp)
    .then(exists => {
        if (exists) {
            return fs.remove(pathTemp)
                .then(() => console.log(pathTemp, ' removed'))
                .catch(() => console.log('error while removing'));
        }
        return;
    })
    //On crée le dossier
    .then(() => {
        return fs.ensureDir(pathTemp)
            .then(() => console.log('temp/ created'))
            .catch(() => console.log('temp/ was not created'));
    })
    //On lit le fichier contenant les pubs
    .then(() => {
        return fs.readJSON('./pubsData.json')
            .then(json => {
                //On écrit le fichier tmp/pubs.json
                return fs.writeJson(pathPubs, json)
                    .then(() => console.log('pubs.json writen !'))
                    .catch(() => console.log('couldn\'t write json'));

            })
            .catch(() => console.log('couldn\'t read Json'));
    })
    //Et on écout les modifs sur le fichier
    .then(
        fs.watchFile(pathPubs, (curr, prev) => {
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        })
    )
    .catch(() => console.log('failure pathExists'));









