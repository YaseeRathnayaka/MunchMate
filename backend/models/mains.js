const mongoose = require('mongoose');

const mainsSchema = new mongoose.Schema({ 
        id: Number,
        name: String,
        description: String,
        price: String 

})

const  MainsData = mongoose.model("mains", mainsSchema);
module.exports = MainsData;