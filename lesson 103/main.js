const myProfile = {
    name: "Anna",
    age: 20,
    isAdmin: true,

    greet: function (name) {
        return `Hello "${name}"`;
    }
};

console.log(myProfile.greet("Anna")); 

const users = [
    { name: "John", age: 25, isAdmin: false },
    { name: "Sarah", age: 32, isAdmin: true },
    { name: "Mike", age: 40, isAdmin: false },
    { name: "Emily", age: 22, isAdmin: false },
    { name: "David", age: 35, isAdmin: true }
];

let regularUsersCount = 0;

for (const user of users) {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
}
console.log(`Кол. обыч. польз-лей: ${regularUsersCount}`);