const { Schema, model } = require('mongoose');

const FavListSchema = Schema({
    name: { type: String, required: true },
    fav: [{
        tour: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
    }]
}, {
    timestamps: true
});

module.exports = model('FavList', FavListSchema);