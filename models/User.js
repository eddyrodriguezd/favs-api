const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

UserSchema.pre('save', function (next) {
    const user = this;

    if (!this.isModified('password')) return next();

    bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) return next(saltError);

        bcrypt.hash(user.password, salt, function (hashError, hash) {
            if (hashError) return next(hashError);
            user.password = hash;
            next();
        })
    })
});

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);