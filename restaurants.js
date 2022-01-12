const { Schema } = require("mongoose");
const restaurant = require("../app.js")

const restaurants = new mongoose.Schema ({

    name: {type: String, required: true},
    id: {type: Number, required: true},
    priceLevel: {type: Number, required: true},
    address: {type: varchar,required: true}


});

export {restaurants};

