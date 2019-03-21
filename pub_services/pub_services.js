var pubs = require('./mocks/pubs.json');

function listePub(){
    listName = [];
    for(i=0; i < pubs.length; i++){
    console.log('pubs', pubs[i]);
    listName.push(pubs[i].name)
    }
    return listName;
}

module.exports = {
    listePub:listePub
};
