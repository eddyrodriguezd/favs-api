const { Schema, model } = require('mongoose');

const FavListSchema = Schema({
    name: { type: String, required: true },
    favs: [{
        title: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
    }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

FavListSchema.statics.findByUser = function (userId) {
    return this.find({ 'user': userId });
};

module.exports = model('FavList', FavListSchema);