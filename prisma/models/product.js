const prisma = require('../prismaClient');
const product = prisma['product'];


async function create(newProduct) {
    return await product.create({
        data: newProduct
    });
}

async function update(id, productToUpdate) {
    return await product.update({
        where: {
            id: parseInt(id)
        },
        data: productToUpdate
    });
}

async function remove(id) {
    return await product.delete({
        where: {
            id: parseInt(id)
        }
    });
}

async function findAll() {
    return await product.findMany();
}

async function findById(id) {
    return await product.findUnique({
        where: {
            id: parseInt(id)
        }
    });
}

module.exports = {
    create,
    update,
    remove,
    findAll,
    findById
}