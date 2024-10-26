//
// Products
//
db = db.getSiblingDB('users');
db.users.insertMany([
    {name: 'user', password: 'password', email: 'user@me.com'},
    {name: 'Sourav', password: 'Sahu@#', email: 'sahu@gmail.com'}
]);

// unique index on the name
db.users.createIndex(
    {name: 1},
    {unique: true}
);

