const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookShema = ({
    name: {
        type: String,
        required: true

    },
    author: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true

    },
    available: {
        type: String,


    },
    image: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Book", bookShema);