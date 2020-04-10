const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TransactionSchema = new schema({
    cc_number:{
        type:String,
        required:true
    },
    cc_cvv:{
        type:Number,
        required:true
    },
    cc_expired_date:{
        type:String,
        required:true
    },
    order_id: {
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

module.exports = Account = mongoose.model("account", TransactionSchema);