const mongoose = require('mongoose');


// Flight schema
const flightSchema = new mongoose.Schema({ 
    airline: {
        type: String,
    enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max:999
    },
    departs: {
        type: Date,
        required: true,
        default: function() {
            const oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow).getFullYear() + 1;
            return oneYearFromNow;        
        }
    }
})
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;