const User = {
    _email: 'sauravjha@mail.com',
    _password: 'password123',


    get email() {
        return this._email.toUpperCase();
    },

    set email(val) {
        this._email = val;
    }
}

const user = Object.create(User);
console.log(user.email);
