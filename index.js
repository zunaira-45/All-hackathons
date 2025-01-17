"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = exports.orderSchema = exports.productSchema = void 0;
exports.productSchema = {
    name: 'product',
    type: 'document',
    fields: [
        { name: 'name', type: 'string', title: 'Product Name' },
        { name: 'category', type: 'string', title: 'Category', options: { list: ['Bags', 'Clothing'] } },
        { name: 'price', type: 'number', title: 'Price' },
        { name: 'stock', type: 'number', title: 'Stock Level' },
        { name: 'image', type: 'image', title: 'Product Image' },
        { name: 'description', type: 'text', title: 'Description' },
    ],
};
exports.orderSchema = {
    name: 'order',
    type: 'document',
    fields: [
        { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
        { name: 'items', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Ordered Items' },
        { name: 'totalPrice', type: 'number', title: 'Total Price' },
        { name: 'status', type: 'string', options: { list: ['Pending', 'Shipped', 'Delivered'] }, title: 'Order Status' },
    ],
};
exports.customerSchema = {
    name: 'customer',
    type: 'document',
    fields: [
        { name: 'name', type: 'string', title: 'Customer Name' },
        { name: 'email', type: 'string', title: 'Email Address' },
        { name: 'phone', type: 'string', title: 'Phone Number' },
        { name: 'address', type: 'string', title: 'Shipping Address' },
    ],
};
