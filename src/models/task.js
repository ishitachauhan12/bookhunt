const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    bookid:{
        type: String,
        required: true,
        
    },
    rating: {
        type: Number,
        default:0,
        required: true,
        unique:true
    },
   
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


module.exports = Task