let shoplist = require('../data/shoplist.json')
const filename = './data/shoplist.json'
const helper = require('../helpers/helper.js');

function getAll() {
    return new Promise((resolve, reject) => {
        if (shoplist.length === 0) {
            reject({
                message: 'Shopping list is empty',
                status: 202
            })
        }
        resolve(shoplist)
    })
}

function getItem(id) {
    return new Promise((resolve, reject) => {
        helper.checkId(shoplist, id)
            .then(item => resolve(item))
            .catch(err => reject(err))
    })
}

function addItem(newItem) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.generateId(shoplist) };
        newItem = { ...id, ...newItem};
        shoplist.push(newItem);
        helper.writeToFile(filename, shoplist);
        resolve(newItem)
    })
}

function updateItem(id, newItem) {
    return new Promise((resolve, reject) => {
        helper.checkId(shoplist, id)
            .then(item => {
                const index = shoplist.findIndex(p => p.id == item.id);
                id = { id: item.id };
                shoplist[index] = {...id, ...newItem};
                helper.writeToFile(filename, shoplist);
                resolve(shoplist[index])
            })
            .catch(err => reject(err))
    })
}

function deleteItem(id) {
    return new Promise((resolve, reject) => {
        helper.checkId(shoplist, id)
            .then(() => {
                shoplist = shoplist.filter(p => p.id != id);
                helper.writeToFile(filename, shoplist);
                resolve()
            })
            .catch(err => reject(err))
    })
}

module.exports = {
    getAll: getAll,
    getItem: getItem,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem
};