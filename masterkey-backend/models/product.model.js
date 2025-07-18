const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        Image: {
            type: String,
            required: false,
        },
    },
    {
        Timestamp: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;