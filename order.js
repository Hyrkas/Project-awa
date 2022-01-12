const { Schema } = require("mongoose");
const order = require("../app.js");

const order = new mongoose.Schema ({

    productName: {type: String, required: true},
    id: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type: String,required: true}


});

export {order};




