const { PrismaClient } = require('@prisma/client');
const product = require('../../prisma/models/product');

const prisma = new PrismaClient();

beforeAll(async () => {
    // Setup : Connecter à la base de données
    await prisma.$connect();
});

afterAll(async () => {
    // Cleanup : Déconnecter de la base de données
    await prisma.$disconnect();
});

describe('Product', () => {
    let productId;

    it('should create a new product', async () => {
        const newProduct = {
            code: '134',
            name: 'Product',
            description: 'Description',
            price: 9.99,
            quantity: 10,
            inventoryStatus: 'In Stock',
            category: 'Category 1',
            image: 'product1.jpg',
            rating: 4.5
        };

        const createdProduct = await product.create(newProduct);

        expect(createdProduct).toHaveProperty('id');
        expect(createdProduct.code).toBe(newProduct.code);
        expect(createdProduct.name).toBe(newProduct.name);
        expect(createdProduct.description).toBe(newProduct.description);
        expect(createdProduct.price).toBe(newProduct.price);
        expect(createdProduct.quantity).toBe(newProduct.quantity);
        expect(createdProduct.inventoryStatus).toBe(newProduct.inventoryStatus);
        expect(createdProduct.category).toBe(newProduct.category);
        expect(createdProduct.image).toBe(newProduct.image);
        expect(createdProduct.rating).toBe(newProduct.rating);

        productId = createdProduct.id;
    });

    it('should retrieve details for a product', async () => {
        const _product = await product.findById(parseInt(productId));

        expect(_product).toBeDefined();
        expect(_product.id).toBe(productId);
    });

    it('should update details of a product', async () => {
        const updatedProductData = {
            description: 'Updated description',
            price: 19.99
        };

        const updatedProduct = await product.update(productId, updatedProductData)

        expect(updatedProduct.description).toBe(updatedProductData.description);
        expect(updatedProduct.price).toBe(updatedProductData.price);
    });

    it('should remove a product', async () => {
        const deletedProduct = await product.remove(productId);
        const _product = await product.findById(parseInt(productId));

        expect(deletedProduct.id).toBe(productId);
        expect(_product).toBeNull();
    });
});
