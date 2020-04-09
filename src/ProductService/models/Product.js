const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
    product_name:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_image: {
        type:String,
        required:false
    },
    modified_at:{
        type:Date,
        default:Date.now
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = Product = mongoose.model("product", ProductSchema);