
export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UserType = {
    [key: string]: {id: number, name: string}
}

export const users: UserType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
//users[1]
let user = {id: 100500, name: 'Igor'}

users[user.id] = user;
delete users[user.id];
users[user.id].name= 'Vitya';

export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
];

// userArray.find(u => u.id === 1)
// userArray.push(user)
// let usersCopy = [...userArray.filter(), user]
// let users = usersArray.filter(u=> u.id !== user.id)