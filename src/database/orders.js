const db = require('./db');

const getOrder = async (ref) => {
    return await db.orders.findOne({ ref });
};

const createOrder = async (order) => {
    const result = await db.orders.insertOne(order);
    return { ...order, _id: result.insertId };
};

module.exports = {
    getOrder,
    createOrder,
};