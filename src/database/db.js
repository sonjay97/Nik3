const { MongoClient } = require('mongodb');
const uri = 
    'mongodb://sonjay97:GPS3YmVW0X4K4hV2@ac-vz468zh-shard-00-00.ii48m8p.mongodb.net:27017,ac-vz468zh-shard-00-01.ii48m8p.mongodb.net:27017,ac-vz468zh-shard-00-02.ii48m8p.mongodb.net:27017/?ssl=true&replicaSet=atlas-130sp2-shard-0&authSource=admin&retryWrites=true&w=majority'
const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
    products,
    orders,
};