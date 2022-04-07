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

FavListSchema.statics.findByUserAndId = function (userId, favListId) {
    return this.find({ 'user': userId, '_id': favListId }).limit(1);
};

FavListSchema.statics.addFavToList = function (userId, favListId, fav) {
    return this.updateOne(
        { 'user': userId, '_id': favListId },
        { $push: { 'favs': fav } }
    );
};

FavListSchema.statics.removeFavList = function (userId, favListId) {
    return this.remove({ 'user': userId, '_id': favListId });
};

module.exports = model('FavList', FavListSchema);