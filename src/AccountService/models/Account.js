const mongoose = require("mongoose");
const schema = mongoose.Schema;

const AccountSchema = new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    full_name: {
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

module.exports = User = mongoose.model("account", AccountSchema);