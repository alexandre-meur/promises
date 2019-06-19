const fs = require('fs-extra');
var pathTemp = 'temp/';

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
    .then(() => {
        return fs.ensureDir(pathTemp)
        .then(() => console.log('temp/ created'))
        .catch(() => console.log('temp/ was not created'));
    })
    .catch(() => console.log('failure pathExists'));









